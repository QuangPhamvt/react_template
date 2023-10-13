import React from "react"
export const usePrevious = <T>(value: T) => {
  const currentValue = React.useRef(value)
  const previousRef = React.useRef<typeof value | null>(null)
  if (currentValue.current !== value) {
    previousRef.current = currentValue.current
    currentValue.current = value
  }
  return previousRef.current
}
