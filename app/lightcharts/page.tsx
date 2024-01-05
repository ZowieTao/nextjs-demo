'use client'

import { AreaDemo } from "./components/AreaDemo"
import { BarDemo } from "./components/BarDemo"
import { DotMapDemo } from "./components/DotMapDemo"
import { PieDemo } from "./components/PieDemo"
import { ScatterDemo } from "./components/ScatterDemo"
import { VideoDataDemo } from "./components/VideoDataDemo"


export default function LightchartsDemo() {

  return (
    <>
      <AreaDemo />
      <BarDemo />
      <PieDemo />
      <ScatterDemo />
      <DotMapDemo />
      <VideoDataDemo />
    </>
  )
}



