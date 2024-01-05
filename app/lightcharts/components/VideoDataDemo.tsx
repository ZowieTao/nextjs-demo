import { ChartOption } from "@byted/lightcharts";
import * as lightcharts from '@byted/lightcharts'
import ReactLightcharts from '@byted/react-lightcharts'
import { useState } from "react";

export const VideoDataDemo = () => {
  const data = [
    {
      timestamp: '0',
      video_ratio: 100,
      click_ratio: 0,
      conversion_ratio: 0
    },
    {
      timestamp: '1000',
      video_ratio: 56.7,
      click_ratio: 9,
      conversion_ratio: 7
    },
    {
      timestamp: '2000',
      video_ratio: 46.1,
      click_ratio: 4.9,
      conversion_ratio: 4.3
    },
    {
      timestamp: '3000',
      video_ratio: 39.9,
      click_ratio: 4.4,
      conversion_ratio: 3.7
    },
    {
      timestamp: '4000',
      video_ratio: 36.5,
      click_ratio: 3.7,
      conversion_ratio: 7.9
    },
    {
      timestamp: '5000',
      video_ratio: 34.7,
      click_ratio: 4.1,
      conversion_ratio: 4.6
    },
    {
      timestamp: '6000',
      video_ratio: 33.2,
      click_ratio: 5,
      conversion_ratio: 4.5
    },
    {
      timestamp: '7000',
      video_ratio: 32,
      click_ratio: 6.7,
      conversion_ratio: 4.2
    },
    {
      timestamp: '8000',
      video_ratio: 31.5,
      click_ratio: 3,
      conversion_ratio: 3
    },
    {
      timestamp: '9000',
      video_ratio: 31,
      click_ratio: 2,
      conversion_ratio: 5
    },
    {
      timestamp: '10000',
      video_ratio: 30.5,
      click_ratio: 4.5,
      conversion_ratio: 8
    },
    {
      timestamp: '11000',
      video_ratio: 30,
      click_ratio: 8,
      conversion_ratio: 10
    }
  ]
  const [focusRowInfo, setFocusRowInfo] = useState(data[0])

  const option: ChartOption = {
    data,
    padding: [0, 80],
    legend: { show: false },
    tooltip: {
      show: true,
      allowEnter: true,
      triggerOn: 'click',
      showContent: false,
      trigger: 'axis',
      alwaysShow: true,
      position: (params) => {
        const { points } = params
        setFocusRowInfo(points[0].data)

        return { x: params.mouse.x, y: params.mouse.y }
      }
    },
    colors: ["#7875f6", "#7baaf6", "#f7ca70"],
    xAxis: {
      type: "category",
      padding: false,
    },
    yAxis: [
      {
        type: "value",
        title: {
          show: false,
        },
        show: true,
        gridLine: {
          show: true,
          stroke: "#282828",
          lineDash: [2],
        },
        axisLabel: {
          show: false
        }
      },
      {
        type: "value",
        show: false
      },
      {
        type: "value",
        show: false
      },
    ],
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

  const nameList = ["Video ratio", "Click ratio", "Conversion ratio"];

  [
    "video_ratio",
    "click_ratio",
    "conversion_ratio",
  ].forEach((field, index) => {
    option.series && option.series.push({
      type: "line",
      name: nameList[index],
      smooth: true,
      yAxis: index,
      encode: {
        x: "timestamp",
        y: field,
      },
    });
  });


  return (
    <div>
      <div className="text-sm font-normal my-2"> {`Video Ratio:${focusRowInfo.video_ratio}%  Click Ratio:${focusRowInfo.click_ratio}%  Conversion Ratio:${focusRowInfo.conversion_ratio}%`}</div>
      <ReactLightcharts option={option} />
    </div>
  )
}