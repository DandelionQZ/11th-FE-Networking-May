import { create } from 'zustand';

interface userState {
  email: string;
  setEmail: (str: string) => void;

  password: string;
  setPassword: (str: string) => void;

  clear: () => void;
}

export const useUserStore = create<userState>((set) => ({
  email: '',
  setEmail: (str: string) => set({ email: str }),

  password: '',
  setPassword: (str: string) => set({ password: str }),

  clear: () =>
    set({
      email: '',
      password: '',
    }),
}));
