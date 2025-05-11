import { useReducer } from 'react'

type UseArrayToggleReturn<T> = [
  value: T,
  toggle: (item?: T) => void,
]
type UseNullToggleReturn = [
  value: boolean,
  toggle: () => void,
]
type UseToggleReturn<T> = [T] extends undefined ? UseNullToggleReturn : UseArrayToggleReturn<T>

interface UseToggleState<R> {
  items: R
  isSwitchedOn: boolean
  index: number
}
interface SetItemAction {
  type: 'set_item'
  payload: number
}
interface SwitchAction {
  type: 'switch_toggle' | 'next_item'
}
type UseToggleAction= SetItemAction | SwitchAction

function reducer<R extends unknown[] | undefined> (state: UseToggleState<R>, action: UseToggleAction) {
  switch (action.type) {
  case 'switch_toggle': {
    return { ...state, isSwitchedOn: !state.isSwitchedOn }
  }
  case 'next_item': {
    if (state.items !== undefined && state.index === state.items.length - 1) return { ...state, index: 0 }
    return { ...state, index: state.index + 1 }
  }
  case 'set_item': {
    return { ...state, index: action.payload }
  }
  default: throw Error('Unknown action')
  }
}

const useToggle = <T = undefined>(items?: T[]) => {
  const [state, dispatch] = useReducer(reducer<typeof items>, { items, index: 0, isSwitchedOn: false })

  const value = state.items ? state.items[state.index] : state.isSwitchedOn

  const toggle = (item?: T) => {
    const index = state.items && item && state.items.indexOf(item)
    if (index !== undefined && index !== -1 && state.index !== index) {
      dispatch({ type: 'set_item', payload: index })
    } else if (index === undefined) {
      dispatch({ type: state.items ? 'next_item' : 'switch_toggle' })
    }
  }
  return [value, toggle] as UseToggleReturn<T>
}

export {
  useToggle
}