import React from "react";
import { VictoryPie, VictoryLabel, VictoryTooltip } from "victory";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import { useQuery } from "../../../gqless";

const EventsChart: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const eventsFromMeasure = query.events_from_measure;

  const badCount = eventsFromMeasure.filter((event) => event.threat > 75).length;
  const mediumCount = eventsFromMeasure.filter((event) => 75 > event.threat && 40 < event.threat).length;
  const goodCount = eventsFromMeasure.filter((event) => 40 > event.threat).length;

  const colors = [];
  const data = [];

  if (badCount > 0) {
    colors.push("#E55B5B");
    data.push({ x: 1, y: badCount, label: `${(badCount / eventsFromMeasure.length) * 100} %` });
  }

  if (mediumCount > 0) {
    colors.push("#FFB951");
    data.push({ x: 2, y: mediumCount, label: `${(mediumCount / eventsFromMeasure.length) * 100} %` });
  }

  if (goodCount > 0) {
    colors.push("#23A454");
    data.push({ x: 3, y: goodCount, label: `${(goodCount / eventsFromMeasure.length) * 100} %` });
  }

  return (
    <svg viewBox="0 0 400 400" width="190px" height="190px">
      <VictoryPie
        colorScale={colors}
        standalone={false}
        width={400}
        height={400}
        data={data}
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
        text={eventsFromMeasure.length}
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
