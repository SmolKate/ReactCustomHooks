import { useFetch } from '../hooks/useFetch'

interface ResDataItem {
  id: number
  title: string
  userId: number
  body: string
}

const UseFetchDemo = () => {
  const { data, isLoading, error, refetch } = useFetch<ResDataItem[]>('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      <div>
        <button onClick={() => refetch({params: {_limit: 5}})}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && !isLoading && 'Произошла ошибка'}
      {data && !isLoading && data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  )
}

export default UseFetchDemo
