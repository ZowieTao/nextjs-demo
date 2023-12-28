'use client'

import { useBoundStore } from "@/store"
import Link from "next/link"

export default function LoginPage() {

  const { bear, fishes, eatFish, addBear } = useBoundStore((state) => {
    return { fishes: state.fishes, eatFish: state.eatFish, addBear: state.addBear, bear: state.bears }
  })


  return (
    <>
      <a
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 select-none"
        target="_blank"
        rel="noopener noreferrer"
        onClick={addBear}
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Add Bear
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Click here will add bear, let&apos;s check out bear count: {bear}
        </p>
      </a>

      <a
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 select-none"
        target="_blank"
        rel="noopener noreferrer"
        onClick={eatFish}
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Feet Bear
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Click here will feet bear, let&apos;s check out fish count: {fishes}
        </p>
      </a>

      <Link
        href='/fish_counter'
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 select-none"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          let&apos;s Fishing
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Click here will feet bear, let&apos;s check out fish count: {fishes}
        </p>
      </Link>
    </>
  )
}