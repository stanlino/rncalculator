import { useCalculatorStore } from "../store/calculator"

export const useCalculator = () => {
  const { value, setValue } = useCalculatorStore()

  const handleOperator = (operator: string) => {
    if (value === '0') {
      setValue('0')
    } else {
      setValue(value + operator)
    }
  }

  const handleNumber = (number: string) => {
    if (value === '0') {
      setValue(number)
    } else {
      setValue(value + number)
    }
  }

  const handleClear = () => {
    setValue('0')
  }

  const handleDelete = () => {
    if (value.length === 1) {
      setValue('0')
    } else {
      setValue(value.slice(0, -1))
    }
  }

  const handleEqual = () => {
    try {
      setValue(eval(value || '0').toString())
    } catch (e) {
      setValue('Error')
    }
  }

  const detectAction = (action: string) => {
    if (action === 'AC') return handleClear()
    if (action === 'C') return handleDelete()
    if (action === '=') return handleEqual()
    if (action === '()') return handleOperator('*(-1)')
    if (action === '+' || action === '-' || action === '*' || action === '/') {
      return handleOperator(action)
    }
    return handleNumber(action)
  }

  return {
    value,
    detectAction
  }
}