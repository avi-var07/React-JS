import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Welcome : {Name}</p>
    <p class="text-red-700 h-16 w-64 margin: 20px; border-8 border-indigo-600"></p>
    <div>
      <form class="bg-red-500 padding: 10px">
        <p class="text-black-900">Login Page</p>
        <label >User Name:</label>
        <br />
        <br />
        <input type="text" name="name" placeholder='Enter naam'/>
        <label >Password</label>
        <br />
        <br />
        <input type="password" name='name' placeholder='Enter Password'/>
        <button class="bg-yellow-900 w-18 h-16 text-blue"></button>
      </form>
    </div>
    </>
  )
}

export default App
