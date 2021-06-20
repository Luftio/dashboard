import React from "react";
import { VictoryPie, VictoryLabel, VictoryTooltip } from "victory";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

const EventsChart: React.FC = () => {
  const { t } = useTranslation<string>();

  return (
    <svg viewBox="0 0 400 400" width="190px" height="190px">
      <VictoryPie
        colorScale={["#E55B5B", "#FFB951", "#23A454"]}
        standalone={false}
        width={400}
        height={400}
        data={[
          { x: 1, y: 8, label: "40 %" },
          { x: 2, y: 8, label: "40 %" },
          { x: 3, y: 4, label: "20 %" },
        ]}
        innerRadius={85}
        labelRadius={120}
        labelComponent={
          <VictoryTooltip
            pointerLength={0}
            active={true}
            flyoutWidth={70}
            flyoutHeight={70}
            cornerRadius={35}
            flyoutStyle={{ stroke: "#AFB8BF", strokeWidth: 1, fill: "#fff" }}
            style={{ fontSize: "24px" }}
          />
        }
      />
      <VictoryLabel
        textAnchor="middle"
        verticalAnchor="middle"
        x={200}
        y={185}
        text={`20`}
        style={{ fontSize: 45, fontFamily: "Montserrat", fontWeight: 600 }}
      />
      ;
      <VictoryLabel
        textAnchor="middle"
        verticalAnchor="start"
        x={200}
        y={215}
        text={`${t("dashboard_events_chart_label")}`}
        style={{ fontSize: 25, fontFamily: "Montserrat" }}
      />
      ;
    </svg>
  );
};

export default EventsChart;
