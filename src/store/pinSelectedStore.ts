import { create } from 'zustand';
import type { locationType } from '../types';

interface PinSelecedState {
  pinSelected: locationType;
  setPinSelected: (pinSelected: locationType) => void;
}

export const usePinSelecedStore = create<PinSelecedState>((set) => ({
  pinSelected: {
    locationId: 0,
    locationName: '',
    latitude: 0,
    longitude: 0,
    isPinned: false,
  },
  setPinSelected: (pinSelected) => set({ pinSelected }),
}));
