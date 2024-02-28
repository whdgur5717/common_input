import { useState } from "react"
import CommonInput from "./CommonInput"

const ControlInput = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <>
      {inputValue}
      <CommonInput
        value={inputValue}
        onChange={value => setInputValue(value)}></CommonInput>
    </>
  )
}

export default ControlInput
