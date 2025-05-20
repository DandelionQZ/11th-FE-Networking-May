import { create } from 'zustand';

interface userState {
  email: string;
  password: string;
}

export const useUserStore = create<userState>((set) => ({
  email: '',
  setEmail: (str: string) => set({ email: str }),

  password: '',
  setPassword: (str: string) => set({ password: str }),
}));
