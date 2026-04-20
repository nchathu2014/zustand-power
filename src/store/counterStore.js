import { create } from "zustand";

export const useCounterStrore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }), // directly access the value with the short-hand notation,
}));
