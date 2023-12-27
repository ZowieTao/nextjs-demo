import { StoreSlice } from ".."

export interface IFishSlice  { 
  fishes: number
  addFish: (qty: number) => void
}



export const createFishSlice:StoreSlice<IFishSlice> = (set,get) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})