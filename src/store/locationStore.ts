import { create } from 'zustand';
import type { locationType } from '../types';

interface LocationState {
  locations: locationType[];
  setLocations: (locations: locationType[]) => void;

  setIsPinned: (id: number, value: boolean) => void;
}

export const useLocationStore = create<LocationState>((set, get) => ({
  locations: [],
  setLocations: (locations) => set({ locations }),

  setIsPinned: (id, value) => {
    const updatedLocations = get().locations.map((loc: locationType) =>
      loc.locationId === id ? { ...loc, isPinned: value } : loc
    );
    set({ locations: updatedLocations });
  },
}));
