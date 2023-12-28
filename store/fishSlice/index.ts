import { BoundStoreSlice } from ".."

export interface IFishSlice {
  fishes: number
  addFish: (qty: number) => void
}

export const createFishSlice: BoundStoreSlice<IFishSlice> = (set, get) => ({
  fishes: 20,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})