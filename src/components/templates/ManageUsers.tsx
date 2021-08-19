import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";

import { Icon } from "ts-react-feather-icons";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Heading from "../elements/Heading";
import ContentBlock from "../elements/ContentBlock";
import Subheading from "../elements/Subheading";
import Button from "../elements/Button";
import BasicText from "../elements/BasicText";
import Tooltip from "../elements/Tooltip";
import UserRow from "../elements/UserRow";
import Loader from "../elements/Loader";
import Modal from "../modules/Modal";
import InviteUserForm from "../modules/forms/InviteUserForm";

import { mutate, useQuery, useRefetch } from "../../gqless/";
import ThingsboardService from "../../services/ThingsboardService";

const Users = styled.div`
  display: flex;
  width: 85%;
  height: 90px;
  flex-direction: column;
  margin: 0 auto;
`;

const RowUsers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 15px;
`;

const TopRowManageUsers = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  border-bottom: ${(props) => props.theme.border_primary};
  padding-bottom: 5px;
`;

const IconDiv = styled.div`
  cursor: pointer;
`;

const Div = styled.div`
  position: relative;
`;

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
`;

const ManageUsers: React.FC = () => {
  const { t } = useTranslation();

  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [deleteModalTarget, setDeleteModalTarget] = useState<string>();

  const refetch = useRefetch();
  const query = useQuery();

  // Gqless problem here, refetch only works once
  const handleRefetch = () =>
    refetch(() => query.accounts.map((it) => [it.id, it.email, it.first_name, it.last_name, it.role]));

  const openAddModal = () => {
    handleRefetch();
    setShowAddModal((prev) => !prev);
  };
  const openDeleteModal = (userId?: string) => () => {
    setShowDeleteModal(true);
    setDeleteModalTarget(userId);
  };
  const handleDelete = () => {
    if (deleteModalTarget === undefined) return;
    mutate((mutation) => mutation.deleteUser({ userId: deleteModalTarget })).then(() => {
      handleRefetch();
    });
    setShowDeleteModal(false);
  };
  const handleChangeRole = (userId?: string) => (role: string) => {
    if (userId === undefined) return;
    mutate((mutation) => mutation.changeRole({ userId: userId, role })).then(() => {
      handleRefetch();
    });
  };

  const myUserId = ThingsboardService.getInstance().getUserData()?.userId;

  return (
    <>
      <Head>
        <title>{t("title_manage_users_page")}</title>
      </Head>
      <Heading dashboard>{t("manage_users_heading")}</Heading>
      <ContentBlock>
        <Users>
          <RowUsers>
            <Subheading dashboard>{t("manage_users_users")}</Subheading>
            <Button onClick={openAddModal}>{t("manage_users_add")}</Button>
          </RowUsers>
        </Users>
        <TopRowManageUsers>
          <BasicText manageUsers>{t("full_name")}</BasicText>
          <BasicText manageUsersEmail>{t("email_input_label")}</BasicText>
          <BasicText manageUsers>Role</BasicText>
          <Div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
            <IconDiv>
              <Icon name="help-circle" size="16px" color="#AFB8BF" />
            </IconDiv>
            {showTooltip && (
              <Tooltip manageUsers>
                <span>{t("manage_users_manager_heading")}</span>
                {t("manage_users_manager_text")}
                <br></br>
                <br></br>
                <span>{t("manage_users_user_heading")}</span>
                {t("manage_users_user_text")}
              </Tooltip>
            )}
          </Div>
        </TopRowManageUsers>
        {query.$state.isLoading ? (
          <LoadingWrapper>
            <Loader />
          </LoadingWrapper>
        ) : (
          query.accounts?.map((user) => (
            <UserRow
              key={user.id}
              name={(user.first_name || "") + " " + (user.last_name || "")}
              email={user.email || ""}
              onDeleteClick={openDeleteModal(user.id)}
              role={user.role || ""}
              onChangeRole={handleChangeRole(user.id)}
              isPending={user.pending_invitation || false}
              locked={user.id == myUserId}
            />
          ))
        )}
      </ContentBlock>
      <Modal
        onClick={handleDelete}
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        subheading={t("manage_users_delete_heading")}
        text={t("manage_users_delete_text")}
        buttonText={t("modal_button_text")}
      />
      <Modal
        showModal={showAddModal}
        setShowModal={setShowAddModal}
        subheading={t("manage_users_modal_add_heading")}
        renderModal={(handleClose) => <InviteUserForm handleClose={handleClose} handleRefetch={handleRefetch} />}
      />
    </>
  );
};

export default ManageUsers;
