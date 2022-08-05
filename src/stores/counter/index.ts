import { StateCreator } from 'zustand';

export interface Counter {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const CounterSlices: StateCreator<Counter> = (set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  decrement: () => set((state) => ({ counter: state.counter - 1 })),
});

export default CounterSlices;
