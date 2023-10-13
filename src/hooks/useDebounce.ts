import React from "react"
import { useTimeout } from "."

export const useDebounce = <TypeArray>(callback: () => void, delay: number, dependencies: Array<TypeArray>) => {
  const [reset, clear] = useTimeout(callback, delay)
  React.useEffect(clear, [clear])
  React.useEffect(reset, [...dependencies, reset])
}
