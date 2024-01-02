import { StateCreator, StoreMutatorIdentifier, create } from 'zustand'
import { IBearSlice, createBearSlice } from './bearSlice'
import { IFishSlice, createFishSlice } from './fishSlice'

type IBoundStore = IBearSlice & IFishSlice

export type BoundStoreSlice<T, Mis extends [StoreMutatorIdentifier, unknown][] = [], Mos extends [StoreMutatorIdentifier, unknown][] = []> = StateCreator<IBoundStore, Mis, Mos, T>


export const useBoundStore = create<IBoundStore>()((set, get, store) => ({
  ...createBearSlice(set, get, store),
  ...createFishSlice(set, get, store),
}))