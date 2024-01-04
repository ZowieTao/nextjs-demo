import { ChartOption } from "@byted/lightcharts";
import { useState } from "react";
import ReactLightcharts from '@byted/react-lightcharts'

export const BarDemo = () => {
  const [peak, setPeak] = useState(9)

  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: peak * .7 },
    { year: '1995', value: peak * 2 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: peak },
    { year: '1999', value: 13 },
  ];

  const option: ChartOption = {
    data,
    interactions: ['point-highlight'],
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    legend: {
      show: false
    },
    series: [
      {
        type: 'bar',
        name: '销售额',
        encode: {
          y: 'value',
          x: 'year',
        }
      }
    ]
  }

  return (
    <div onClick={() => {
      setPeak(pre => pre === 9 ? 2 : 9)
    }}>
      <ReactLightcharts option={option} style={{ height: 400 }} />
    </div>
  )
}