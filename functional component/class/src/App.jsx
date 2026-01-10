import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {name, PI} from './math'

export function add(a, b){
  return a+b;
}
export function sub(a, b){
  return a-b;
}
export function mult(a, b){
  return a*b;
}
export function div(a, b){
  return a/b;
}
export function mod(a, b){
  return a%b;
}
function App() {


  return (
    <>
    <p>My name is {name}</p>
    <p>Value of PI is: {PI}</p>
    
    </>
  )
}

export default App
