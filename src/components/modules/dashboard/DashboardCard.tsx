import React from "react";
import styled from "styled-components";
import BasicText from "../../elements/BasicText";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

const Card = styled.div`
  width: 32%;
  height: 350px;
  border-radius: ${(props) => props.theme.border_radius_primary};
  background-color: #fff;
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  margin-right: 1.5%;
  cursor: pointer;
  padding: 15px 15px;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.08);
    transition: ${(props) => props.theme.transition_primary};
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 260px;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const BottomRowItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: space-between;
  text-align: center;
  flex: 0.4;
`;

interface Props {
  subheading: string;
  score: number;
  minValue: number;
  maxValue: number;
  change: number;
  type: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const DashboardCard: React.FC<Props> = ({ subheading, score, minValue, maxValue, change, type, onClick }) => {
  const { t } = useTranslation();

  return (
    <>
      {type === "score" && (
        <Card onClick={onClick}>
          <TopRow>
            <BasicText name>{subheading}</BasicText>
            <BasicText procentsDashboard color={score > 75 ? "#23A454" : score > 40 ? "#FFB951" : "#E55B5B"}>
              {score} %
            </BasicText>
          </TopRow>
          <BottomRow>
            <BottomRowItem>
              <BasicText bottomRowProcents>{maxValue} %</BasicText>
              <BasicText bottomRowProcentsName>max.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents>{minValue} %</BasicText>
              <BasicText bottomRowProcentsName>min.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents color={change > 0 ? "#23A454" : "#E55B5B"}>
                {change} %
              </BasicText>
              <BasicText bottomRowProcentsName>{change > 0 ? t("dashboard_improvement") : t("dashboard_deterioration")}</BasicText>
            </BottomRowItem>
          </BottomRow>
        </Card>
      )}
      {type === "CO2" && (
        <Card>
          <TopRow>
            <BasicText name>{subheading}</BasicText>
            <BasicText procentsDashboard color={score < 1000 ? "#23A454" : score < 2000 ? "#FFB951" : "#E55B5B"}>
              {score} ppm
            </BasicText>
          </TopRow>
          <BottomRow>
            <BottomRowItem>
              <BasicText bottomRowProcents>{maxValue} ppm</BasicText>
              <BasicText bottomRowProcentsName>max.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents>{minValue} ppm</BasicText>
              <BasicText bottomRowProcentsName>min.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents color={change > 0 ? "#23A454" : "#E55B5B"}>
                {change} %
              </BasicText>
              <BasicText bottomRowProcentsName>{change > 0 ? t("dashboard_improvement") : t("dashboard_deterioration")}</BasicText>
            </BottomRowItem>
          </BottomRow>
        </Card>
      )}
      {type === "temperature" && (
        <Card>
          <TopRow>
            <BasicText name>{subheading}</BasicText>
            <BasicText procentsDashboard color={score > 19 && score < 24 ? "#23A454" : score > 17 && score < 27 ? "#FFB951" : "#E55B5B"}>
              {score}°C
            </BasicText>
          </TopRow>
          <BottomRow>
            <BottomRowItem>
              <BasicText bottomRowProcents>{maxValue}°C</BasicText>
              <BasicText bottomRowProcentsName>max.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents>{minValue}°C</BasicText>
              <BasicText bottomRowProcentsName>min.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents color={change > 0 ? "#23A454" : "#E55B5B"}>
                {change} %
              </BasicText>
              <BasicText bottomRowProcentsName>{change > 0 ? t("dashboard_improvement") : t("dashboard_deterioration")}</BasicText>
            </BottomRowItem>
          </BottomRow>
        </Card>
      )}
      {type === "humidity" && (
        <Card>
          <TopRow>
            <BasicText name>{subheading}</BasicText>
            <BasicText procentsDashboard color={score > 30 && score < 60 ? "#23A454" : score > 25 && score < 70 ? "#FFB951" : "#E55B5B"}>
              {score} %
            </BasicText>
          </TopRow>
          <BottomRow>
            <BottomRowItem>
              <BasicText bottomRowProcents>{maxValue} %</BasicText>
              <BasicText bottomRowProcentsName>max.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents>{minValue} %</BasicText>
              <BasicText bottomRowProcentsName>min.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents color={change > 0 ? "#23A454" : "#E55B5B"}>
                {change} %
              </BasicText>
              <BasicText bottomRowProcentsName>{change > 0 ? t("dashboard_improvement") : t("dashboard_deterioration")}</BasicText>
            </BottomRowItem>
          </BottomRow>
        </Card>
      )}
      {type === "pressure" && (
        <Card>
          <TopRow>
            <BasicText name>{subheading}</BasicText>
            <BasicText procentsDashboard color={score > 970 && score < 1020 ? "#23A454" : "#FFB951"}>
              {score} hPa
            </BasicText>
          </TopRow>
          <BottomRow>
            <BottomRowItem>
              <BasicText bottomRowProcents>{maxValue} hPa</BasicText>
              <BasicText bottomRowProcentsName>max.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents>{minValue} hPa</BasicText>
              <BasicText bottomRowProcentsName>min.</BasicText>
            </BottomRowItem>
            <BottomRowItem>
              <BasicText bottomRowProcents color={change > 0 ? "#23A454" : "#E55B5B"}>
                {change} %
              </BasicText>
              <BasicText bottomRowProcentsName>{change > 0 ? t("dashboard_improvement") : t("dashboard_deterioration")}</BasicText>
            </BottomRowItem>
          </BottomRow>
        </Card>
      )}
    </>
  );
};

export default DashboardCard;
