import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MyForm from './MyForm'
// import MultipleForm from './MultipleForm'
// import UnControlForm from './UncontrolForm'
// import FormHandling from './FormHandling'
import SubmitForm from './submitForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <MyForm/> */}
    {/* <MultipleForm/> */}
    {/* <UnControlForm/> */}
    {/* <FormHandling/> */}
    <SubmitForm/>
    </>
  )
}

export default App
