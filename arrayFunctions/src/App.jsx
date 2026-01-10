import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let alphabets = ['A','B','C','D','E'];
  const notpresent = alphabets.find(ch=>ch=='F');
  const present = alphabets.find(ch=>ch=='E');

  const students = [
    {
      name: "Jethalal", age: 20
    },
    {
      name: "Champaklal",  age: 69
    }
  ];
  students.forEach(student=>{
    console.log(`${student.name} is ${student.age} years old`);
  });
  return (
    <>

    <p>Character is: {present}</p>
    <p>Character is: {notpresent}</p>
    </>
  )
}

export default App
