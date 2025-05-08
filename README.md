This project was performed using React + TypeScript + Vite.

# Run project

It is neseccary to perform the following command `npm run dev` in order to start the project in the development mode.

# Project target

This project was carried out for educational purposes. It was necessary to implement a custom hook (useFetch) to fetch data as follows:
```
import { useFetch } from './useFetch';

function Demo() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  
  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
    </div>
  );
}
```
