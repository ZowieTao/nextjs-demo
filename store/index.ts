import { StoreApi, create } from 'zustand'
import { IBearSlice, createBearSlice } from './bearSlice'
import { IFishSlice, createFishSlice } from './fishSlice'



type StoreState = IBearSlice & IFishSlice
/* 
if use create function to collect all slice which need combine, each slice can operate other slice state.
https://docs.pmnd.rs/zustand/guides/slices-pattern
I don't know how to use typescript in upper link case
*/
export type StoreSlice<T> = (
  set: StoreApi<StoreState>['setState'],
  get: StoreApi<StoreState>['getState'],
) => T;


/* 
type StateFromFunctions<T extends [...any]> = T extends [infer F, ...(infer R)]
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;


type State = StateFromFunctions<[
  typeof createBearSlice,
  typeof createFishSlice
]>; 
*/


export const useBoundStore = create<StoreState>((set, get) => ({
  ...createBearSlice(set, get),
  ...createFishSlice(set, get),
}))