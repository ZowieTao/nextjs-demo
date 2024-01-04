import { ChartOption } from "@byted/lightcharts";
import * as lightcharts from '@byted/lightcharts'
import ReactLightcharts from '@byted/react-lightcharts'

export const VideoDataDemo = () => {

  const option: ChartOption = {
    data: [{ "date": "2020-12-01", "business_01": 489, "business_02": 260, "business_03": 260, "business_04": 260, "business_05": 260 }, { "date": "2020-12-08", "business_01": 520, "business_02": 260, "business_03": 260, "business_04": 260, "business_05": 260 }, { "date": "2020-12-15", "business_01": 460, "business_02": 260, "business_03": 260, "business_04": 260, "business_05": 260 }, { "date": "2020-12-22", "business_01": 489, "business_02": 260, "business_03": 260, "business_04": 260, "business_05": 260 }, { "date": "2020-12-30", "business_01": 540, "business_02": 260, "business_03": 260, "business_04": 260, "business_05": 260 }],
    padding: [0, 40, 24, 80],
    legend: { show: false },
    tooltip: {
      sort: (a, b) => {
        return a.value - b.value
      },
    },
    colors: ["#7875f6", "#7baaf6", "#86f0f1", "#f7ca70", "#f08c89"],
    xAxis: {
      type: "category",
      padding: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [],
    events: {
      onAfterrender: ({ chart }) => {
        const renderObjects = chart.getAllRenderObjs();
        chart.eachSeriesModel((seriesModel) => {
          const points = seriesModel.getState().points;
          const { plotX, plotY, stackX, stackY } = points[0];
          const name = seriesModel.getOption().name;
          const backgroundWidth = 200;
          renderObjects.push(
            new lightcharts.element.Rect({
              key: "left-text-background" + name,
              x: plotX - 20 - backgroundWidth,
              y: (plotY + stackY) / 2 - 6,
              width: 200,
              height: 12,
              fill: "#f7f7f7",
            })
          );

          renderObjects.push(
            new lightcharts.element.Text({
              key: "left-text" + name,
              x: plotX - 20,
              y: (plotY + stackY) / 2,
              text: name,
              textAlign: "right",
              textBaseline: "middle",
              fill: "#999",
            })
          );
        });
      },
    },
  };

  const nameList = ["业务01部", "业务02部", "业务03部", "电商平台", "大众消费"];

  [
    "business_01",
    "business_02",
    "business_03",
    "business_04",
    "business_05",
  ].forEach((field, index) => {
    option.series.push({
      type: "area",
      name: nameList[index],
      encode: {
        x: "date",
        y: field,
      },
      stack: "business",
    });
  });


  return (
    <div>
      <ReactLightcharts option={option} />
    </div>
  )
}