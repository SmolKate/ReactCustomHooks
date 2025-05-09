import { useState } from 'react'
import { useWindowEvent } from './useWindowEvent'

type UseWindowScroll = () => [
    scroll: {x: number, y: number},
    scrollTo: (value: {x?: number, y?: number}) => void,
  ]

const useWindowScroll: UseWindowScroll = () => {
  const [xPosition, setXPosition] = useState(window?.scrollX)
  const [yPosition, setYPosition] = useState(window?.scrollY)
  
  const handleScroll = () => {
    setXPosition(window.scrollX)
    setYPosition(window.scrollY)
  }
  useWindowEvent('scroll', handleScroll)

  const scrollTo = ({ x = xPosition, y = yPosition }) => {
    window.scroll(x, y)     
  }
  const scroll = {x: xPosition, y: yPosition}
  return [scroll, scrollTo]
}

export {
  useWindowScroll
}