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