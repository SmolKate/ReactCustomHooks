import { useRef, useState, useEffect } from "react"
 
function useHover<T extends HTMLElement> () {
  const ref = useRef<T>(null)
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    const handleMouseOver = () => {setHovered(true)}
    const handleMouseLeave = () => {setHovered(false)}
        
    if(ref && ref.current) {
      const element = ref.current
      element.addEventListener('mouseover', handleMouseOver)
      element.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        element.removeEventListener('mouseover', handleMouseOver)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])
  return {hovered, ref}
}

export {
  useHover
}