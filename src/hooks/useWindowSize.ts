import React from "react"
import { useEventListener } from "."
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<{
    width: number
    height: number
  }>({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  })
  return windowSize
}
