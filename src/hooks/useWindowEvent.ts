import { useEffect } from 'react'

type AddEventListenerParams = Parameters<typeof addEventListener>

const useWindowEvent = (...[type, listener, options]: AddEventListenerParams) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options])
}

export {
  useWindowEvent
}
