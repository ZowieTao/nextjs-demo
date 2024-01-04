import { ChartOption } from "@byted/lightcharts";
import { useState } from "react";
import ReactLightcharts from '@byted/react-lightcharts'

export const AreaDemo = () => {
  const [peak, setPeak] = useState(170000)

  const data = [
    {
      date: '2023-03-22',
      cost: 90000,
    },
    {
      date: '2023-04-13',
      cost: 120000,
    },
    {
      date: '2023-05-05',
      cost: 50000,
    },
    {
      date: '2023-05-27',
      cost: 150000,
    },
    {
      date: '2023-06-18',
      cost: peak,
    },
    {
      date: '2023-07-10',
      cost: 120000,
    },
    {
      date: '2023-08-01',
      cost: 60000,
    },
  ];
  const option: ChartOption = {
    data,

    padding: 10,

    interactions: [
      'point-highlight',
      'series-highlight'
    ],

    title: {
      show: true,
      floating: false,
      text: 'COST',
      verticalAlign: 'middle',
      align: 'right',
      margin: 20,
      itemGap: 4,
      offsetX: 0,
      offsetY: 10,
      textStyle: {
        rich: 'html',
        fontSize: 14,
        fontWeight: 800,
        color: '#1C1F23',
        fontFamily: 'TikTok Text',
      },
      subtext: 'Cost of the month',
      subtextStyle: {
        rich: 'html',
        fontSize: 12,
        fontWeight: 400,
        color: '#8A8A8A',
        fontFamily: 'TikTok Text',
      },
    },

    legend: {
      show: true,
      scrollable: true,
      width: 300,
      height: 40,
      floating: false,
      position: 'bottom',
      align: 'start',
      backgroundStyle: {
        stroke: '#F2F2F2',
        shadowColor: 'rgba(0, 0, 0, 0.04)',
      }
    },

    xAxis: [
      {
        type: 'category',
        show: true,
        min: 0,
        max: 10000,
        opposite: false,
        inverse: true,
        padding: false,
        tickCount: 4,
        title: {
          show: true,
          align: "start",
          text: 'x axis Date',
          margin: 0,
          offsetX: -60,
          offsetY: -10,
          textStyle: {
            rich: 'html',
            fontSize: 12,
            fontWeight: 400,
            color: '#8A8A8A',
            fontFamily: 'TikTok Text',
          },
        },
        axisLine: {
          show: true,
          stroke: '#D9D9D9',
          lineWidth: 3,
          lineDash: [10, 2, 2, 2],
          lineCap: "butt",
          lineJoin: 'bevel'
        },
        alternateColor: ['#330', '#303', '#033'],
        tickLine: {

        }
      },
    ],

    yAxis: {
      type: 'value',
    },
    tooltip: {
      show: true,
      useCssFixedPosition: true,
      backgroundColor: 'rgba(255,255,255,.95)',
      borderColor: '#333',
      offset: 12,
      padding: [12, 16],
      hideDelay: 100,
      throttle: 100,
      transitionDuration: 200,
      allowEnter: true,
      useHTML: true,
      crosshairs: {
        lineStyle: {
          lineWidth: 1,
          lineDash: [10, 2, 2, 2],
          lineCap: "butt",
          lineJoin: 'bevel'
        }
      },
      textStyle: {
        rich: 'html',
        fontSize: 12,
        fontWeight: 400,
        color: '#1C1F23',
        fontFamily: 'TikTok Text',
      },
      formatter: function (param) {
        return (<div>{param.title} | {param.points[0].plotX}</div>)
      },
      triggerOn: 'mousemove',
      showContent: true,
      zIndex: 1000,
      trigger: 'item',
      rtl: true,
      sort: undefined
    },
    slider: [{
      show: true,
      position: 'bottom',
      align: 'center',
      realTime: true,
      margin: 24,
      width: '100%',
      size: 28,
      start: undefined,
      end: undefined
    }],
    brush: {
      enabled: true,
      axis: 'x',
      brushStyle: {
        fill: 'rgba(51, 51, 51, 0.1)',
        lineWidth: 1,
        stroke: '#333',
        lineCap: 'round',
        lineJoin: 'round',
      },
    },
    commonOption: {
      series: {
        hover: {
          marker: {
            show: true,
            size: 8,
            fill: '#fff',
            stroke: '#1C1F23',
            lineWidth: 2,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 4,
            shadowOffsetY: 2,
          }
        }
      },
      line: {},
      bar: {},
      pie: {}
    },
    series: [
      {
        type: 'area',
        name: 'cost',
        smooth: true,
        zoneAxis: 'x',
        marker: { show: true },
        encode: {
          x: 'date',
          y: 'cost',
        }
      }
    ],
  }


  return (
    <div onClick={() => {
      setPeak(pre => pre === 170000 ? 120000 : 170000)
    }}>
      <ReactLightcharts option={option} style={{ height: 400 }} />
    </div>
  )
}