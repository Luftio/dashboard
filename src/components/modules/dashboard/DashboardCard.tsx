import React from "react";
import styled from "styled-components";
import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from "victory";

import BasicText from "../../elements/BasicText";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import DeviceData from "../../../types/DeviceData";

import { useQuery } from "../../../gqless";

const Card = styled.div`
  width: 31.5%;
  border-radius: ${(props) => props.theme.border_radius_primary};
  background-color: #fff;
  box-shadow: ${(props) => props.theme.color_block_box_shadow};
  margin-right: 1.5%;
  cursor: pointer;
  padding: 15px 15px;
  margin-bottom: 1.7%;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.08);
    transition: ${(props) => props.theme.transition_primary};
  }

  @media only screen and (max-width: 1200px) {
    width: 48.5%;
  }

  @media only screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ChartRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  justify-content: center;
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

interface DashboardCardProps {
  data: DeviceData;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ data, onClick }) => {
  const { t } = useTranslation();

  const getFormattedValue = (type: string, value: number) => {
    if (type === "score" || type === "humidity") {
      return value + " %";
    } else if (type === "CO2") {
      return value + " ppm";
    } else if (type === "temperature") {
      return value + "°C";
    } else if (type === "pressure") {
      return value + " hPa";
    }
    return value;
  };

  const getChartProps = (type: string) => {
    if (type === "score") {
      return { minDomain: { y: 0 }, maxDomain: { y: 100 } };
    } else if (type === "CO2") {
      return { minDomain: { y: 0 }, maxDomain: { y: 2000 } };
    } else if (type === "temperature") {
      return { minDomain: { y: 5 }, maxDomain: { y: 35 } };
    } else if (type === "pressure") {
      return { minDomain: { y: 800 }, maxDomain: { y: 1200 } };
    } else if (type === "humidity") {
      return { minDomain: { y: 0 }, maxDomain: { y: 100 } };
    }
    return {};
  };

  const query = useQuery();

  return (
    <>
      <Card onClick={onClick}>
        <TopRow>
          <BasicText name>
            {data.title} {/*{query.getMeasuredData?.title} */}
          </BasicText>
          <BasicText
            procentsDashboard
            color={data.color == "green" ? "#23A454" : data.color == "yellow" ? "#FFB951" : "#E55B5B"}>
            {getFormattedValue(data.type, data.value)}
          </BasicText>
        </TopRow>
        <ChartRow>
          <VictoryChart theme={VictoryTheme.material} height={250} padding={{ left: 45, top: 20, bottom: 50 }}>
            <VictoryAxis dependentAxis fixLabelOverlap={true} scale={{ x: "time" }} />
            <VictoryAxis fixLabelOverlap={true} scale={{ x: "time" }} />
            <VictoryLine
              {...getChartProps(data.type)}
              style={{
                data: { stroke: "#031846" },
              }}
              data={data.values}
              animate={{
                duration: 500,
                onLoad: { duration: 1000 },
              }}
              interpolation="natural"
              x="ts"
              y="value"
            />
          </VictoryChart>
        </ChartRow>
        <BottomRow>
          <BottomRowItem>
            <BasicText bottomRowProcents>
              {getFormattedValue(data.type, data.maxValue)} {/*{query.getMeasuredData?.max_value} */}
            </BasicText>
            <BasicText bottomRowProcentsName>max.</BasicText>
          </BottomRowItem>
          <BottomRowItem>
            <BasicText bottomRowProcents>
              {getFormattedValue(data.type, data.minValue)} {/*{query.getMeasuredData?.min_value} */}
            </BasicText>
            <BasicText bottomRowProcentsName>min.</BasicText>
          </BottomRowItem>
          <BottomRowItem>
            <BasicText bottomRowProcents color={data.change > 0 ? "#23A454" : "#E55B5B"}>
              {data.change} %{/* {query.getMeasuredData?.difference} % */}
            </BasicText>
            <BasicText bottomRowProcentsName>
              {data.change > 0 ? t("dashboard_improvement") : t("dashboard_deterioration")}
              {/* {query.getMeasuredData?.difference > 0 ? t("dashboard_improvement") : t("dashboard_deterioration")} */}
            </BasicText>
          </BottomRowItem>
        </BottomRow>
      </Card>
    </>
  );
};

export default DashboardCard;
