import { ChangeEvent, ReactNode, useState } from "react"

interface SearchInputProps {
  value?: string
  onChange?: (value: string) => void
  children?: ReactNode
}

const CommonInput = ({ value: outerStateValue, onChange }: SearchInputProps) => {
  const isControlled = outerStateValue !== undefined

  const [innerStateValue, setInnerStateValue] = useState(outerStateValue)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!isControlled) {
      setInnerStateValue(value)
    }
    onChange?.(value) // onChange가 있을 경우에만 실행
  }

  return (
    <>
      <input
        value={isControlled ? outerStateValue : innerStateValue}
        onChange={handleChange}
      />
    </>
  )
}

export default CommonInput
