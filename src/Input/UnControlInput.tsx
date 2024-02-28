import { useRef } from "react"
import CommonInput from "./CommonInput"

const UnControlledInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <>
      <button onClick={() => console.log(ref.current)} />
      <CommonInput ref={ref}></CommonInput>
    </>
  )
}

export default UnControlledInput
