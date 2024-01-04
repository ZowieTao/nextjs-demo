import { ChartOption } from "@byted/lightcharts";
import ReactLightcharts from '@byted/react-lightcharts'
import { data } from "../../../constants/data";
import ReactDOM from "react-dom";

export const ScatterDemo = () => {

  const option: ChartOption = {
    data, legend: {
      show: true
    },
    xAxis: {
      type: 'value',
      softMin: null,
    },
    yAxis: {
      type: 'value',
      softMin: null,
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
    series: [
      {
        type: 'scatter',
        name: '男女身高体重',
        encode: {
          shape: ['gender', val => {
            if (val === 'male') {
              return 'circle'
            } else {
              return 'rect'
            }
          }
          ],
          x: 'height',
          y: 'weight',
          name: 'gender',
          color: ['gender', ['#44f', '#44f']],
          size: 5
        },
        legendType: 'group',
        legendGroupField: 'gender',
      }
    ],
    tooltip: {
      show: true,
      useCssFixedPosition: true,
      throttle: 100,
      allowEnter: true,
      formatter: (param) => {
        const pointData = param.points[0].data
        const { gender, height, weight } = pointData



        return (
          <div>
            {param.points[0].name}
            <div>
              <div>性别: {gender}</div>
              <div>身高: {height}</div>
              <div>体重: {weight}</div>
            </div>
          </div>
        )
      },
      customRenderer: (renders: { ReactTooltipRenderer: new (arg0: typeof ReactDOM) => any; }) => new renders.ReactTooltipRenderer(ReactDOM)
    }
  }



  return (
    <div>
      <ReactLightcharts option={option} />
    </div>
  )
}