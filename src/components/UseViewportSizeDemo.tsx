import { useViewportSize } from '../hooks/useViewPortSize'

function UseViewportSizeDemo() {
  const { height, width } = useViewportSize()

  return (
    <>
      Width: {width}, height: {height}
    </>
  )
}

export default UseViewportSizeDemo