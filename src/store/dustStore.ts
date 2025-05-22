import { create } from 'zustand';
import type { dustType } from '../types';

interface DustState {
  dust: dustType;
  setDust: (dust: dustType) => void;
}

export const useDustStore = create<DustState>((set) => ({
  dust: {
    stationName: '',
    dataTime: '',
    pm10Value: '',
    pm10Grade: '',
    pm25Value: '',
    pm25Grade: '',
  },
  setDust: (dust) => set({ dust }),
}));
