import { useState } from 'react'
import GenericBody from './components/GenericBody/GenericBody'
import { GlobalStyle } from './GlobalStyled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <GenericBody />
    </>
  )
}

export default App
