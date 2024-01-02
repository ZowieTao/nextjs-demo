import { StateCreator, StoreMutatorIdentifier, create } from 'zustand'
import { IBearSlice, createBearSlice } from './bearSlice'
import { IFishSlice, createFishSlice } from './fishSlice'
import { devtools } from 'zustand/middleware'

type IBoundStore = IBearSlice & IFishSlice

export type BoundStoreSlice<T, Mis extends [StoreMutatorIdentifier, unknown][] = [], Mos extends [StoreMutatorIdentifier, unknown][] = []> = StateCreator<IBoundStore, Mis, Mos, T>


export const useBoundStore = create<IBoundStore>()(devtools((set, get, store) => ({
  ...createBearSlice(set, get, store),
  ...createFishSlice(set, get, store),
}), { enabled: process.env.NODE_ENV !== 'production', name: 'Bound Store' }))