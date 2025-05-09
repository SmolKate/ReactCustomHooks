import { useState } from 'react'

type LocalStorageSetValue = string
type LocalStorageReturnValue = LocalStorageSetValue | null

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void
    removeItem: () => void
  },
]

const useLocalStorage:UseLocalStorage = (key) => {
  const [value, setValue] = useState(localStorage.getItem(key))

  const setItem = (value: LocalStorageSetValue) => {
    localStorage.setItem(key, value)
    setValue(value)
  }

  const removeItem = () => {
    localStorage.removeItem(key)
    setValue(null)
  }
  
  return [value, { setItem, removeItem }]
}

export {
  useLocalStorage,
  type UseLocalStorage
}