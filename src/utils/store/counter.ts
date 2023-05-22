import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface countState {
  count: number;
  username: string;
  foo: string;
  increase: () => void;
  decrease: () => void;
  setUsername: (payload: string) => void;
}

const useCounter = create<countState>()(
  persist(
    (set) => ({
      count: 0,
      username: 'M Teguh Irawan',
      foo: 'beard',
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () =>
        set((state) => ({ count: state.count === 0 ? 0 : state.count - 1 })),
      setUsername: (username) => set({ username }),
    }),
    {
      name: 'counter-storage',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !['username', 'foo'].includes(key)
          )
        ),
    }
  )
);

export default useCounter;
