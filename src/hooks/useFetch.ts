import { useState, useEffect} from 'react'

interface RefetchConfig {
    params: {_limit: number}
}

function useFetch<T = undefined, R = undefined> (url: string) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<R | null>(null)
  const [limit, setLimit] = useState(1)

  const refetch = (config: RefetchConfig) => {
    setLimit(config.params._limit)
  }

  useEffect(() => {
    if(url && limit > 0) {
      setIsLoading(true)
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!data || data.length === 0 || Object.keys(data).length === 0) throw Error('There is no data')
          setData(data)
          setLimit(0)
        }
        )
        .catch(setError)
        .finally(() => {
          setLimit(prev => prev - 1)
        }) 
    } else {
      setIsLoading(false)
    }
  }, [url, limit])

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}

export {
  useFetch
}