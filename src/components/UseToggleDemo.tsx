import { useToggle } from '../hooks/useToggle'

function UseToggleDemo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal', 5] as const)

  return (
    <>
      <button onClick={() => toggle()}>
        {value}
      </button>
      <button onClick={() => toggle('orange')}>Blue</button>
    </>
  )
}

export default UseToggleDemo