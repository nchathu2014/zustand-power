import { create } from "zustand";
const API = "https://picsum.photos/v2/list?page=2&limit=30";

export const useImageStore = create((set) => ({
  images: [],
  loading: false,
  error: null,
  fetchImages: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(API);
      const data = await res.json();
      set({ images: data, loading: false, error: false });
    } catch (error) {
      set({ loading: false, error });
    }
  },
}));
