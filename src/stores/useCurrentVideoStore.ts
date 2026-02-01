import { create } from "zustand";

interface CurrentVideoState {
  currentVideo: number;
  changeCurrentVideo: (currentVideo: number) => void;
}

export const useCurrnetVideoStore = create<CurrentVideoState>(set => ({
  currentVideo: 0,
  changeCurrentVideo: currentVideo => set({ currentVideo }),
}));
