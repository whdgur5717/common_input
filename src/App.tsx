import ControlInput from "./Input/ControlInput"
import UnControlledInput from "./Input/UnControlInput"

function App() {
  return (
    <>
      제어 컴포넌트 : <ControlInput />
      비제어 컴포넌트 : <UnControlledInput />
    </>
  )
}

export default App
