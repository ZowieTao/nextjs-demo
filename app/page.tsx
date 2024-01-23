'use client'
import Link from "next/link";


// 引入 VChart 核心模块
import { VChart } from "@visactor/vchart/esm/core";
// 引入柱状图
import { registerBarChart, registerAreaChart, registerLineChart, registerScatterChart, registerPieChart, registerMapChart } from "@visactor/vchart/esm/chart";
// 引入坐标轴、Tooltip、CrossHair 组件
import {
  registerCartesianLinearAxis,
  registerCartesianBandAxis,
  registerTooltip,
  registerCartesianCrossHair, registerTitle
} from "@visactor/vchart/esm/component";
// 引入浏览器环境
import { registerBrowserEnv } from "@visactor/vchart/esm/env";
import { IBarChartSpec } from "@visactor/vchart";
import { useEffect } from "react";



export default function Home() {
  // 注册
  VChart.useRegisters([
    registerBarChart, registerAreaChart, registerLineChart, registerScatterChart, registerPieChart, registerMapChart,
    registerCartesianLinearAxis,
    registerCartesianBandAxis,
    registerTooltip,
    registerCartesianCrossHair,
    registerBrowserEnv, registerTitle
  ]);
  useEffect(() => {
    const spec: IBarChartSpec = {
      type: "bar",
      data: [
        {
          id: "barData",
          values: [
            { month: "Monday", sales: 22 },
            { month: "Tuesday", sales: 13 },
            { month: "Wednesday", sales: 25 },
            { month: "Thursday", sales: 29 },
            { month: "Friday", sales: 38 }
          ]
        }
      ],
      xField: "month",
      yField: "sales",
      crosshair: {
        xField: { visible: true }
      }
    };

    const vchart = new VChart(spec, { dom: "container" });
    vchart.renderAsync();
  }, [])


  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <a
        href="https://docs.pmnd.rs/zustand/getting-started/introduction"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Docs{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Find in-depth information about Zustand features and API.
        </p>
      </a>

      <a
        href="https://zustand-demo.pmnd.rs/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Simplest Demo{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          The simplest way to use zustand.
        </p>
      </a>

      <Link
        href="/fish_counter"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Fish-Counter{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          This is global counter state page.
        </p>
      </Link>

      <Link
        href="/bear"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Bear Yummy
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Let our little bear consume some fish.
        </p>
      </Link>
    </div>


  )
}
