import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryLabel } from "victory";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

const HapinessChart: React.FC = () => {
  const { t } = useTranslation<string>();

  const getData = (percent: number) => {
    return [
      { x: 1, y: percent },
      { x: 2, y: 100 - percent },
    ];
  };

  const [percent, setPercent] = useState<number>(25);
  const [data, setData] = useState<any>(getData(0));

  useEffect(() => {
    const percent = 86;
    setPercent(percent);
    setData(getData(percent));
  }, [percent]);

  return (
    <svg viewBox="0 0 400 400" width="190px" height="190px">
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
              const color = datum.y > 75 ? "#23A454" : datum.y > 40 ? "#FFB951" : "#E55B5B";
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
        text={`${percent} %`}
        style={{ fontSize: 45, fontFamily: "Montserrat", fontWeight: 600 }}
      />
      ;
      <VictoryLabel
        textAnchor="middle"
        verticalAnchor="start"
        x={200}
        y={215}
        text={`${t("dashboard_feedback_chart_label")}`}
        style={{ fontSize: 25, fontFamily: "Montserrat" }}
      />
      ;
    </svg>
  );
};

export default HapinessChart;
