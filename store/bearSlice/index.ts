import { produce } from "immer"
import { StoreSlice } from ".."

export interface IBearSlice {
  bears: number
  addBear: () => void
  eatFish: () => void
}

export const createBearSlice: StoreSlice<IBearSlice> = (set, get, store) => ({
  bears: 1,
  addBear: () => set((state) => produce(state, (draft) => {
    // draft.bears = draft.bears + 1;
    draft.bears = get().bears + 1
  })),
  eatFish: () => set((state) => ({ fishes: state.fishes - state.bears })),
})