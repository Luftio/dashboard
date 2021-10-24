import React from "react";
import styled from "styled-components";

import {
  VictoryChart,
  VictoryContainer,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";

import { DeviceData } from "../../../graphql";

const ChartRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  justify-content: center;
  z-index: 1000000;
`;

interface ReportChartProps {
  data: DeviceData;
}

const ReportChart: React.FC<ReportChartProps> = ({ data }) => {
  const getChartProps = (type: string) => {
    if (type === "CO2") {
      return { minDomain: { y: 0 }, maxDomain: { y: 2000 } };
    } else if (type === "temperature") {
      return { minDomain: { y: 5 }, maxDomain: { y: 35 } };
    }
    return {};
  };

  return (
    <ChartRow>
      <VictoryChart
        theme={VictoryTheme.material}
        width={900}
        height={300}
        padding={{ left: 45, top: 35, bottom: 50 }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `${datum.value}${data.unit}`}
            labelComponent={
              <VictoryTooltip
                pointerLength={6}
                active={true}
                cornerRadius={4}
                flyoutStyle={{ stroke: "#e1e6ea", strokeWidth: 1, fill: "#fff", padding: 60 }}
                style={{ fontSize: "14px" }}
              />
            }
          />
        }>
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
          interpolation="step"
          x={(it) => new Date(it.ts)}
          y="value"
        />
      </VictoryChart>
    </ChartRow>
  );
};

export default ReportChart;
