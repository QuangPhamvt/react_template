import React from "react"
export const useTimeout = (callback: () => void, delay: number) => {
  const callbackRef = React.useRef(callback)
  const timeoutRef = React.useRef<NodeJS.Timeout>()

  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = React.useCallback(() => {
    if (!timeoutRef || !callbackRef.current) return null
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])
  const clear = React.useCallback(() => {
    timeoutRef.current ?? clearTimeout(timeoutRef.current)
  }, [])

  React.useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = React.useCallback(() => {
    clear()
    return set
  }, [clear, set])

  return [reset, clear]
}
