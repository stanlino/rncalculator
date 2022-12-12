import create from 'zustand'

interface CalculatorStore {
  value: string
  setValue: (value: string) => void
}

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  value: '0',
  setValue: (value) => set({ value }),
}))