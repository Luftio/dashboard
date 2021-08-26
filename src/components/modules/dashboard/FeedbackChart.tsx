import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryLabel } from "victory";

import "../../../i18n/i18n";
import { useTranslation } from "react-i18next";

import { useQuery } from "../../../gqless";

const HapinessChart: React.FC = () => {
  const { t } = useTranslation<string>();

  const query = useQuery();
  const eventsFromEmployee = query.events_from_employee;

  let score = 0;
  let averageScore = 0;

  for (let i = 0; i < eventsFromEmployee.length; i++) {
    //@ts-ignore
    score = score + eventsFromEmployee[i].threat;
  }

  if (eventsFromEmployee.length > 0) {
    averageScore = score / eventsFromEmployee.length;
  }
  const data = [];

  data.push({ x: 1, y: averageScore });
  data.push({ x: 2, y: 100 - averageScore });

  return (
    <>
      {eventsFromEmployee.length !== 0 && (
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
            text={`${averageScore !== undefined ? averageScore : score} %`}
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
      )}
    </>
  );
};

export default HapinessChart;
