'use client'

import { useBoundStore } from "@/store"
import Link from "next/link"
import { memo, useEffect, useState } from "react"
import { shallow } from "zustand/shallow"

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

      <FishTip />

    </>
  )
}



const FishTip = memo(_FishTip)


function _FishTip() {
  console.log('==fish tip render==')

  const addBear = useBoundStore((state) => {
    return state.addBear
  })

  const [text, setText] = useState('')
  // const [text, setText] = useState(useBoundStore.getState().fishes > 25 ? 'Too many fishes' : 'Small amount of fish')

  useEffect(() => {
    /*     const cancelSub = useBoundStore.subscribe((state, prevState) => {
          console.log('==fish tip subscribe==', state.fishes, prevState.fishes)
    
          if (state.fishes > 25) {
            setText('Too many fishes')
          } else if (state.fishes <= 25) {
            setText('Small amount of fish')
          }
        })
    
        return cancelSub */

    const cancelSub = useBoundStore.subscribe(
      state => state.fishes,
      (fishes, prevFishes) => {
        console.log('==fish tip subscribeWithSelector==', fishes, prevFishes)

        if (fishes > 25) {
          setText('Too many fishes')
        } else if (fishes <= 25) {
          setText('Small amount of fish')
        }
      },
      { equalityFn: shallow, fireImmediately: true }
    )

    return cancelSub

  }, [])



  return <a
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 select-none"
    rel="noopener noreferrer"
    onClick={addBear}
  >
    <h2 className={`mb-3 text-2xl font-semibold`}>
      Fish statistic
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
      {text} {`(click to add bear)`}
    </p>
  </a>
}