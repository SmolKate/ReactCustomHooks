This project was performed using React + TypeScript + Vite.

# Run project

It is neseccary to perform the following command `npm run dev` in order to start the project in the development mode.

# Project target

This project was carried out for educational purposes. It was necessary to implement:
1. custom hook (useViewportSize) to get width and height of the viewport as follows:
```
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
```
2. custom hook (useWindowScroll) to get scroll position and to scroll into desired position as follows:
```
import { useWindowScroll } from './useWindowScroll';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
```
3. custom hook (useToggle) to toggle value between true and false if the hook argument is null or toggle between the items of the array passed to the hook as an argument. For example:
```
import { useToggle } from './useToggle';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

// Еще примеры использования

const [value, toggle] = useToggle(['light', 'dark']);

toggle(); // -> value === 'light'
toggle(); // -> value === 'dark'

// Так же можно передать конкретное значение и тогда 
// value станет одним из значений
toggle('dark'); // -> value === 'dark'
```