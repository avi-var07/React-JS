import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  class Jethalal{
    constructor(name, age){
      this.name=name;
      this.age=age;
    }
    show(){
      return `Kya haal chaal? Name: ${this.name}, age: ${this.age}`
    }
  }
  var obj = new Jethalal("Jethalal Champaklal Gada", "Infinite Aura++");
  class Champaklal extends Jethalal{
    constructor(name, age, email){
      super(name, age);
      this.email=email;
    
    }
    show1(){
      return `Name: ${this.name}, my age: ${this.age}, email: ${this.email}`
    }
    
  }
  var obj1 = new Champaklal("Champaklal", "Buddha", "gyaanpelu@gokuldham.com");
  return (
    <>
      <p>Hello Bacchhoooooooooooo</p>
      <p>The sum of 999+9999 is: {999+9999}</p>
      <p> Hello Baccho: {obj.show()}</p> 
      <p>Mere bapuji: {obj1.show1()}</p>
    </>
  )
}

export default App
