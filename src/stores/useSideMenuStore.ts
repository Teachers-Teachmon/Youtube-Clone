import { create } from "zustand";

interface SideMenuState {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const useSideMenuStore = create<SideMenuState>(set => ({
  isOpen: false,
  toggleIsOpen: () => set(prev => ({ isOpen: !prev.isOpen })),
}));
