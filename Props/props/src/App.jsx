import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Student from './Student'

function App() {
  const studentDetails = {naam: "Aviral Varshney", age: 20, sex: "Male"}
  return (
    <>
    <Student details = {studentDetails}/>
    <Welcome name = "Aviral Varshney"
    topics = "React Props Concept"
    place = "Jalandhar"
    branch = "CSE"/>
    </>
  )
}

export default App
