import { ChangeEvent, forwardRef, useState } from "react"

interface SearchInputProps {
  value?: string
  onChange?: (value: string) => void
}

const CommonInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value: outerStateValue, onChange }: SearchInputProps, ref) => {
    const isControlled = outerStateValue !== undefined

    const [innerStateValue, setInnerStateValue] = useState(outerStateValue || "")

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
          ref={ref}
          value={isControlled ? outerStateValue : innerStateValue}
          onChange={handleChange}
        />
      </>
    )
  }
)

export default CommonInput
