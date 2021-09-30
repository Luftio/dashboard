import React from "react";
import {
  createContainer,
  VictoryAxis,
  VictoryBrushContainer,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainerProps,
  VictoryZoomContainerProps,
} from "victory";

interface ModalChartProps {
  data: any;
  zoomDomain: any;
  setZoomDomain: (domain: any) => void;
  unit: string;
}

const ModalChart: React.FC<ModalChartProps> = ({ data, zoomDomain, setZoomDomain, unit }) => {
  const VictoryZoomVoronoiContainer = createContainer<VictoryZoomContainerProps, VictoryVoronoiContainerProps>(
    "zoom",
    "voronoi"
  );

  return (
    <>
      <VictoryChart
        theme={VictoryTheme.material}
        width={700}
        height={300}
        scale={{ x: "time" }}
        padding={{ left: 45, top: 35, bottom: 50 }}
        containerComponent={
          <VictoryZoomVoronoiContainer
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={setZoomDomain}
            voronoiDimension="x"
            labels={({ datum }: any) => `${datum.value}${unit}`}
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
        <VictoryAxis dependentAxis fixLabelOverlap={true} />
        <VictoryAxis fixLabelOverlap={true} />
        <VictoryLine
          style={{
            data: { stroke: "#031846" },
          }}
          data={data}
          interpolation="step"
          x={(it) => new Date(it.ts)}
          y="value"
        />
      </VictoryChart>
      <VictoryChart
        theme={VictoryTheme.material}
        padding={{ top: 0, left: 45, right: 0, bottom: 30 }}
        width={700}
        height={100}
        scale={{ x: "time" }}
        containerComponent={
          <VictoryBrushContainer brushDimension="x" brushDomain={zoomDomain} onBrushDomainChange={setZoomDomain} />
        }>
        <VictoryAxis fixLabelOverlap={true} />
        <VictoryLine
          style={{
            data: { stroke: "#031846" },
          }}
          data={data}
          x={(it) => new Date(it.ts)}
          y="value"
        />
      </VictoryChart>
    </>
  );
};

export default ModalChart;
