import { create } from 'zustand';
import type { stationType } from '../types';

interface DustState {
  station: stationType;
  setStation: (station: stationType) => void;
}

export const useDustStore = create<DustState>((set) => ({
  station: {
    stationName: '',
    stationCode: '',
    address: '',
    distanceTm: 0,
  },
  setStation: (station) => set({ station }),
}));
