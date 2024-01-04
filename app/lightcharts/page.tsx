'use client'

import { AreaDemo } from "./components/AreaDemo"
import { BarDemo } from "./components/BarDemo"
import { DotMapDemo } from "./components/DotMapDemo"
import { PieDemo } from "./components/PieDemo"
import { ScatterDemo } from "./components/ScatterDemo"


export default function LightchartsDemo() {

  return (
    <>
      <AreaDemo />
      <BarDemo />
      <PieDemo />
      <ScatterDemo />
      <DotMapDemo />
    </>
  )
}



