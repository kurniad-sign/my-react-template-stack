import create from 'zustand';
import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import { mountStoreDevtool } from 'simple-zustand-devtools';

import CounterSlices, { Counter } from './counter';
import createBearSlice, { BearSlice } from './bear-fishes';

const useStore = createSelectorHooks(
  create<Counter & BearSlice>()((...args) => ({
    ...CounterSlices(...args),
    ...createBearSlice(...args),
  })),
);

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Base Store', useStore);
}

export default useStore;
