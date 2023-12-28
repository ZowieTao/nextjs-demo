'use client'

import { useBoundStore } from "@/store"
import Link from "next/link"

export default function LoginPage() {

  const { fishes, addFish, bear } = useBoundStore((state) => {
    return { fishes: state.fishes, addFish: state.addFish, bear: state.bears }
  })


  return (
    <>
      <a
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 select-none"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          addFish(1)
        }}
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Add Fish
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Click here will plus global fish state, let&apos;s check out: {fishes}
        </p>
      </a>

      <Link
        href='/bear'
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 select-none"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Bear
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Click here will plus global fish state, let&apos;s check out: {bear}
        </p>
      </Link>
    </>
  )
}