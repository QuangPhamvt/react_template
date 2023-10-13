import React from "react"

export const useToggle = (defaultValue: boolean) => {
  const [toggle, setToggle] = React.useState<boolean>(defaultValue)

  const toggleValue = (value: unknown) => {
    setToggle((currentValue) => (typeof value === "boolean" ? value : !currentValue))
  }
  return [toggle, toggleValue]
}
