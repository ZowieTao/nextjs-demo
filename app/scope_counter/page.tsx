'use client'
import Link from 'next/link'

export default function ScopeCounterPage() {
  const computeDoubleCount = (num: number) => 2 * num

  const { computedCount, inc } = useScopeCounterStore(useShallow((state) => {
    const computedCount = computeDoubleCount(state.count)

    return { computedCount, inc: state.inc }
  }))

  const { bears, fishes } = useBoundStore()

  return (
    <>
      <a
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 select-none"
        rel="noopener noreferrer"
        onClick={inc}
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Add
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          plus page counter state, let&apos;s check out: {computedCount}
        </p>
      </a>


      <Link
        href='/'
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 select-none"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Global State
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Fish: {fishes} | Bear: {bears}
        </p>
      </Link>

      <LoginButton />
    </>
  )
}

import { useBoundStore } from '@/store'
import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import { produce } from 'immer'
import LoginButton from '@/components/loginButton'

type Store = {
  count: number
  inc: () => void
  vanishBear: () => void
}

const useScopeCounterStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  vanishBear: () => {
    useBoundStore.setState((state) => {
      return produce(state, (draft) => {
        draft.bears = 0
      })
    })
  }
}))

