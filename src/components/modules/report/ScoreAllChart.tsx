import React from "react";
import { VictoryContainer, VictoryPie, VictoryLabel, VictoryChart } from "victory";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

interface ScoreAllChartProps {
  averageScore: number;
}

const ScoreAllChart: React.FC<ScoreAllChartProps> = ({ averageScore }) => {
  const { t } = useTranslation<string>();

  const data = [];

  data.push({ x: 1, y: averageScore });
  data.push({ x: 2, y: 100 - averageScore });

  return (
    <>
      <VictoryContainer width={400} height={400} style={{ width: "400px" }}>
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={data}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = datum.y > 75 ? "#23A454" : datum.y > 50 ? "#FFB951" : "#E55B5B";
                return datum.x === 1 ? color : "transparent";
              },
            },
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          x={200}
          y={185}
          text={`${averageScore} %`}
          style={{ fontSize: 45, fontFamily: "Montserrat", fontWeight: 600 }}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="start"
          x={200}
          y={215}
          text={`${t("dashboard_score")}`}
          style={{ fontSize: 25, fontFamily: "Montserrat" }}
        />
      </VictoryContainer>
    </>
  );
};

export default ScoreAllChart;
