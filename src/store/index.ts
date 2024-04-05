import { create } from "../zustand";

const useTestStore = create((set) => ({
  text: 'react',
  count: 10,
  name: 'Michael Jordan',
  setTest: (value: any) => set({ text: value }),
}));

export default useTestStore