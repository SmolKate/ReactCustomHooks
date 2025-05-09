import { useHover } from '../hooks//useHover'

function UseHoverDemo() {
  const { hovered, ref } = useHover<HTMLDivElement>()

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default UseHoverDemo