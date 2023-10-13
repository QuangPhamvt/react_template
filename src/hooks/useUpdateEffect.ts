import React from "react"
export const useUpdateEffect = <T>(callback: () => void, dependencies: Array<T>) => {
  const firstRender = React.useRef<boolean>(true)
  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    return callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies])
}
