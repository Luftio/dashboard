import React from "react";
import styled from "styled-components";
import Link from "next/link";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import Button from "../elements/Button";
import Subheading from "../elements/Subheading";
import BasicText from "../elements/BasicText";
import DetailRowText from "../elements/DetailRow";

import { Icon } from "ts-react-feather-icons";

const Card = styled.div`
  background: #fff;
  width: 95%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.border_radius_primary};
  padding: 40px 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const SuggestionsDetailBlock: React.FC = () => {
  const { t } = useTranslation<string>();

  return (
    <Card>
      <TopRow>
        <Subheading contentBlockItem>Kupte zvlhčovač vzduchu</Subheading>
        <Link href="/suggestions">
          <Button>{t("detail_close")}</Button>
        </Link>
      </TopRow>
      <BottomRow>
        <Icon name="clock" size="16" color="#838C97" />
        <BasicText events>14/3/2021</BasicText>
      </BottomRow>
      <DetailRowText type="importance" subheading={t("detail_suggestions_importance")} high value={0} />
      <DetailRowText
        type="text"
        subheading={t("detail_suggestions_description")}
        text="Na základě dlouhodobého trendu snížené hodnoty vlhkosti ve vašich kancelářích jsme vyhodnotili, že by jste zlepšili podmínky koupí zvlhčovače vzduchu."
        value={0}
      />
      <DetailRowText
        type="text"
        subheading={t("detail_suggestions_solve")}
        text="Zakupte zvhlčovač vzduchu. Nejlépe by se mělo jednat o produkt chytré domácnosti, který můžete napojit na Luftio systém. My ho pak budeme automatiky nastavovat aby byl co nejvíce užitečný."
        value={0}
      />
      <DetailRowText
        type="text"
        subheading={t("detail_suggestions_matter")}
        text="Při nízké vlhkosti dochází k víření prachu a nečistot do vzduchu. Lidské tělo začne rychleji ztrácet vodu, což vede k vysychání sliznice dýchacích cest. To má za následek oslabení organismu a jeho obranyschopnosti."
        value={0}
      />
    </Card>
  );
};

export default SuggestionsDetailBlock;
