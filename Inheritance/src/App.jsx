import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // class ABC{
  //   static show(){
  //     return "Inside class ABC";
  //   }
  // }
  // class XYZ{
  //   static show(){
  //     return "Inside class XYZ";
  //   }
  // }
  //var obj = new XYZ();

  //nesting of arrow functions: 
    
  //let result=(a,b)=>(c)=>(a+b)*c;
  let result1 = (a,b)=>(c)=>(d)=>(a+b)/c*d; 
  let student = (naam, registration)=>({naam, registration});
  let user = (naam, age, email)=>({naam, age, email});
  return (
    <>
    {/* <p>{ABC.show()}</p>

    <p>{XYZ.show()}</p> */}
    {/* <p>{result(2,4)(6)}</p>  o/p is 36*/}
    <p>{result1(2,7)(9)(8)}</p>
    <p>{`Name: ${user("Aviral", 20, "aviralvarshney07@gmail.com").naam}, Age: ${user("Aviral", 20, "aviralvarshney07@gmail.com").age}, Email: ${user("Aviral", 20, "aviralvarshney07@gmail.com").email}`}</p>
    </>
  )
}

export default App
