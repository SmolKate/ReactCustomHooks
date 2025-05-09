This project was performed using React + TypeScript + Vite.

# Run project

It is neseccary to perform the following command `npm run dev` in order to start the project in the development mode.

# Project target

This project was carried out for educational purposes. It was necessary to implement a custom hook (useLocalStorage) to save data in localStorage as follows:
```
import { useLocalStorage } from './useLocalStorage';

function Demo() {
  const [value, { setItem, removeItem }] = useLocalStorage('some-key');

  return (
    <div>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setItem('new storage value')}>Задать значение</button>
        <button onClick={() => removeItem()}>Удалить значение</button>
      </div>
    </div>
  );
}
```