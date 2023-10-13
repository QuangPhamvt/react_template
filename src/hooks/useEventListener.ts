import React from "react"
export const useEventListener = (eventType: string, callback: (event: Event) => void, element = window) => {
  const callbackRef = React.useRef(callback)

  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  React.useEffect(() => {
    if (element === null) return
    const listener: EventListener = (event: Event) => callbackRef.current(event)
    element.addEventListener(eventType, listener)
    return () => element.removeEventListener(eventType, listener)
  }, [eventType, element])
}
