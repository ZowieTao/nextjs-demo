import { ChartOption } from "@byted/lightcharts";
import { useState } from "react";
import ReactLightcharts from '@byted/react-lightcharts'
import { WrappedSeriesPoint } from "@byted/lightcharts/lib/model";

export const PieDemo = () => {
  const [peak, setPeak] = useState(9)


  const data = [{ "value": 400, "gender": "武装直升机" }, { "value": 335, "gender": "男" }, { "value": 310, "gender": "女" }]

  const option: ChartOption = {
    tooltip: { show: true },
    data: data,
    legend: {
      position: 'right',
      formatter: `
		<hbox width="160">
			<span><%=name%></span>
			<spacer flex="1" />
			<span><%=value%></span>
		</hbox>
	`,
      textStyle: {
        rich: true,
      },
    },
    series: [
      {
        type: 'pie',
        innerSize: 120,
        selectedRadiusOffset: 20,
        center: ["35%", "50%"],
        title: {
          show: true,
          text: '粉丝性别比例',
        },
        label: {
          show: true,
          distance: 50,
          formatter: (point: WrappedSeriesPoint) => {
            if (point.name === '武装直升机') {
              return point.name;
            }
            return '';
          },
        },
        encode: {
          name: 'gender',
          value: 'value',
        },
        selectedRotate: true,

        defaultState: {
          selected: (item: any, index: number) => {
            return item.gender === '武装直升机'
          },
        }
      },
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