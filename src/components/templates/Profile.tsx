import React, { useState } from "react";
import Head from "next/head";
import styled, { css } from "styled-components";

import Avatar from "react-avatar";

//@ts-ignore
import Shimmer from "react-shimmer-effect";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ContentBlock from "../elements/ContentBlock";
import Subheading from "../elements/Subheading";
import InputItem from "../elements/InputItem";
import Button from "../elements/Button";
import BasicText from "../elements/BasicText";
import ShimmerItem from "../elements/ShimmerItem";
import ProfileForm from "../modules/profile/ProfileForm";
import ContentBlockItem from "../modules/ContentBlockItem";
import ChangePassword from "../modules/profile/ChangePasswordForm";
import OnboardingFormResult from "../modules/profile/OnboardingFormResults";
import EmailVerifyCard from "../modules/profile/EmailVerifyCard";

import { useGetAccountQuery } from "../../graphql";

const Expand = styled.form<{ profile?: boolean; edit?: boolean }>`
  display: flex;
  width: 85%;
  flex-direction: column;
  margin: -10px auto 0 auto;

  ${(props) =>
    props.profile &&
    css`
      border-bottom: ${(props) => props.theme.divider};
      margin: -70px auto 0 auto;
      padding-bottom: 45px;
    `};

  ${(props) =>
    props.edit &&
    css`
      margin: -70px auto 50px auto;
      padding-bottom: 20px;
    `};
`;

const Wrapper = styled.div`
  display: flex;
  width: 85%;
  height: 150px;
  flex-direction: column;
  margin: 0 auto;
`;

const TopRow = styled.div<{ selectForm?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 15px;

  ${(props) =>
    props.selectForm &&
    css`
      margin-top: 30px;
    `};
`;

const Settings: React.FC = () => {
  const { t } = useTranslation();

  const [editPassword, setEditPassword] = useState<boolean>(false);
  const [editProfile, setEditProfile] = useState<boolean>(false);

  const query = useGetAccountQuery();
  const user = query.data?.account;

  return (
    <>
      <Head>
        <title>{t("title_profile_page")}</title>
      </Head>
      <Heading dashboard>{t("profile_page_heading")}</Heading>
      <ContentBlock>
        <Wrapper>
          <TopRow>
            <Subheading dashboard>{t("profile_edit_heading")}</Subheading>
            <Button
              opacity={editProfile && "0"}
              cursor={editProfile && "none"}
              onClick={() => setEditProfile(!editProfile)}>
              {t("profile_edit_button_text")}
            </Button>
          </TopRow>
        </Wrapper>
        {editProfile ? (
          <>
            <Expand edit>
              <InputItem profile avatar>
                <label htmlFor="name">Avatar</label>
                <Avatar
                  name={user?.first_name + " " + user?.last_name}
                  round={true}
                  size="75"
                  color="#E1E6EA"
                  style={{ fontFamily: "inherit", fontWeight: "600", letterSpacing: "1px", marginLeft: "15px" }}
                  textSizeRatio={4}
                />
              </InputItem>
            </Expand>
            <ProfileForm onClick={() => setEditProfile(false)} />
          </>
        ) : (
          <Expand profile>
            {query.loading ? (
              <Shimmer>
                <ShimmerItem width={50} marginBottom={20}></ShimmerItem>
                <ShimmerItem width={50} marginBottom={20}></ShimmerItem>
                <ShimmerItem width={50} marginBottom={23}></ShimmerItem>
              </Shimmer>
            ) : (
              <>
                <InputItem profile avatar>
                  <label htmlFor="name">Avatar</label>
                  <Avatar
                    name={user?.first_name + " " + user?.last_name}
                    round={true}
                    size="75"
                    color="#E1E6EA"
                    style={{ fontFamily: "inherit", fontWeight: "600", letterSpacing: "1px", marginLeft: "15px" }}
                    textSizeRatio={4}
                  />
                </InputItem>
                <InputItem profile>
                  <label htmlFor="name">{t("profile_expand_name")}</label>
                  <input id="name" type="text" defaultValue={user?.first_name} />
                </InputItem>
                <InputItem profile>
                  <label htmlFor="surname">{t("profile_expand_surname")}</label>
                  <input id="surname" type="text" defaultValue={user?.last_name} />
                </InputItem>
                <InputItem profile>
                  <label htmlFor="email">{t("profile_expand_email")}</label>
                  <input id="email" type="text" defaultValue={user?.email} />
                </InputItem>
              </>
            )}
            {/* <EmailVerifyCard />*/}
          </Expand>
        )}
        <ContentBlockItem
          subheading={t("profile_change_password_subheading")}
          buttonText={t("profile_change_password_button_text")}
          text={t("profile_change_password_text")}
          url=""
          onClick={() => setEditPassword(!editPassword)}
          opacity={editPassword && "0"}
          cursor={editPassword && "none"}
        />
        {editPassword && <ChangePassword onClick={() => setEditPassword(false)} />}
        {/* TODO: load onboarding form
        <Wrapper>
          <TopRow selectForm>
            <Subheading dashboard>{t("profile_onboarding_form_results_heading")}</Subheading>
          </TopRow>
          <BasicText contentBlockItem>{t("profile_onboarding_form_results_text")}</BasicText>
        </Wrapper>
        <Expand>
          <OnboardingFormResult />
        </Expand>
        */}
      </ContentBlock>
    </>
  );
};

export default Settings;
