import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PI , name, multiply} from './math.jsx'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Greeting from './greeting.jsx'
import Form from './Form.jsx'
import Portfolio from './portfolio.jsx'
import Welcome from './welcome-props.jsx'
import Info from './Info-props.jsx'
import StudentDetails from './student-props.jsx'
import Student from './student1.jsx';
import StudentDetails2 from './stud1.jsx';
import MultiStudent from './multistudent.jsx';
// const style1={
//   color:'white',
//   backgroundColor:'blue',
//   padding:'10px',
//   borderRadius:'5px',
//   textAlign:'center'
// };

function App() {
  const multistudent={name:"Ritik", age:21};
  // const courseDetails={course:"INT252 - React Framework", topic:"Props"};
  // const studentDetails={name:"Ritik", age:21, rollno:101, college:"LPU University"};
  // const stud={name:"Ritik", age:21, rollno:101, college:"LPU University"};
  // const stud1={name:"Aayush", age:22, rollno:102, college:"LPU University"};
  // class Student {
  //   show() {
  //     return "Hello Students";
  //   }
  //   play() {
  //     return "I am playing";
  //   }
  // }

  // class Student1 extends Student {
  //   constructor(name, age) {
  //     super(); 
  //     this.name = name;
  //     this.age = age;
  //   }

  //   display() {
  //     return `Name: ${this.name}, Age: ${this.age}`;
  //   }
  // }
  // class s1{
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  // class s2 extends s1{
  //   constructor(name, age, rollno) {
  //     super(name, age); 
  //     this.rollno = rollno;
  //   }

  //   details() {
  //     return `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollno}`;
  //   }
  // }
  // class s3 extends s2{
  //   constructor(name, age, rollno, college) {
  //     super(name, age, rollno); 
  //     this.college = college;
  //   }

  //   info() {
  //     return `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollno}, College: ${this.college}`;
  //   }
  // }
  // var obj = new Student();
  // var obj2 = new Student1("Ritik", 21);
  // var obj3 = new s2("Ritik", 21, 101);
  // var obj4 = new s3("Ritik", 21, 101, "XYZ University");
  // class ABC{
  //   show2(){
  //     return "Hello from ABC class";
  //   }
  // }
  // class XYZ extends ABC{
  //   show2(){
  //     return super.show2() + "Hello from XYZ class";
  //   }
  // }
  // let obj5=new XYZ();
  // class PQR{
  //   static display1(){
  //     return "Hello from PQR class";
  //   }
  // }
  // function add(a,b){
  //   return a+b;
  // }
  // let sum=(x,y)=>x+y;
  // let sum1=(x,y)=>x-y;
  // let square=x=>x*x;
  // let nesting=()=>{
  //   let inner=()=>{
  //     return "Hello from inner function";
  //   };
  //   return inner();
  // }
  // let result=(a,b)=>(c)=>a+b*c;
  // let final=(a,b)=>(c)=>(d)=>(a+b)/c*d;
  // let user=(name, reg)=>({name, reg});
  // const Button=()=>{
  //   const handleClick=()=>alert("Button clicked");
  //   return <button onClick={handleClick}>Click Me</button>
  // };
  // const msg=()=>"Ritik here";
  // const array=[1,2,3,40,50];
  // const odd = array.filter(x => x % 2 !== 0);
  // const even = array.filter(x => x % 2 === 0);
  // const doubled=array.map(x=>x*2);
  // const adult=array.filter(x=>x>18);
  // const square1=array.map(x=>x*x);
  // const friends=["Aayush","Ritik","Ankit","Sagar"];
  // const sum=array.reduce((total,n)=>total+n,0);
  // const fruits = ["Apple", "Banana", "Cherry", "Mango"];
  // const fruitList = [];

  // for (let i = 0; i < fruits.length; i++) {
  //   fruitList.push(<li key={i}>{fruits[i]}</li>);
  // }
  // const array1=[-10,20,30,40,50];
  // const result=array1.every(x=>x>0);
  // const CAMarks=[4,5,23,17];
  // const Ages=[35,40,50,45,5,6];
  // const resultAges=Ages.every(x=>x>18);
  // const student=[
  //   {id:1, name:"Ritik", age:21},
  //   {id:2, name:"Aayush", age:22},
  //   {id:3, name:"Ankit", age:23},
  //   {id:4, name:"Sagar", age:24}
  // ]
  // const adult=student.find(s=>s.age>18);
  // student.forEach(s=>{
  //   console.log(`${s.name} is ${s.age} years old.`);
  // });
  // const arr2=[1,2,3,4,5];
  // arr2.forEach(
  //   n=>console.log(n)
  // );
  // const letters=Array.from("Ritik");
  // const numbers=Array.from({length:5},(_,i)=>i+1);
  // const num=[1,2,3,3,4,5,6,4,5];
  // const uniquenumber=Array.from(new Set(num));
  // const alpha=["a","b","c","d"];
  // const uniquealpha=Array.from(new Set(alpha));
  // const names=["Ritik","Aayush","Ankit","Sagar","Ritik","Aayush"];
  // const uniquenames=Array.from(new Set(names));
  // const cardname="Ritik";
  return (
    <>
      {/* <p>Welcome to the React Class</p>
      <p>The sum of two is: 25+25</p>
      <p>The sum of two is: {25 + 25}</p>
      <p>The value of Student class method is: {obj.show()}</p>
      <p>The value of Student1 class method is: {obj2.display()}</p>
      <p>The value of Student1 inherited method is: {obj2.play()}</p>
      <p>The value of s2 class method is: {obj3.details()}</p>
      <p>The value of s3 class method is: {obj4.info()}</p> */}
      {/* <p>{obj5.show2()}</p>
      <p>{PQR.display1()}</p> */}
      {/* <p>{add(25,30)}</p>
      <p>{sum(40,50)}</p>
      <p>{sum1(50,30)}</p>
      <p>Square : {square(6)}</p>
      <p>{nesting()}</p>
      <p>Nasting function: {result(5,10)(2)}</p>
      <p>final :{final(5,10)(2)(3)}</p>
      <p>{`Name: ${user("Ritik",12310057).name}, Reg: ${user("Ritik",12310057).reg}`}</p> */}
      
      {/* <p>{Button()}</p>
      <p>{msg()}</p>
      <p>Odd Numbers: {odd.join(", ")}</p>
      <p>Even Numbers: {even.join(", ")}</p>
      <p>Doubled Numbers: {doubled.join(", ")}</p>
      <p>Adult Ages: {adult.join(", ")}</p>
      <p>Adult count: {adult.length}</p>
      <p>Square of Numbers: {square1.join(", ")}</p>
      
      <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
      <p>Sum of Array Elements: {sum}</p>
    <div>
      <h2>Fruit List</h2>
      <ul>{fruitList}</ul>
    </div>
    <p>{result.toString()}</p> */}
    {/* <p>All Ages are above 18: {resultAges.toString()}</p> 
    <p>Branch found: {res2}</p>*/}
    {/* <p>First Adult Student: {adult?adult.id:"No Adult Student Found"}</p> */}
    {/* {letters.map((ch, i) => (
      <p key={i}>{ch}</p>
    ))} */}
    {/* {numbers.map((num, i) => (
      <p key={i}>{Math.sqrt(num)}</p>
    ))} */}

    {/* <h3>Unique Numbers:</h3>
    {uniquenumber.map(n=>(
      <p key={n}>{n}</p>
    )
    )}
    <h3>Unique Alphabets:</h3>
    {uniquealpha.map(c=>(
      <p key={c}>{c}</p>
    )
    )}
    <h3>Unique Names:</h3>
    {uniquenames.map(name=>(
      <p key={name}>{name}</p>
    )
    )} */}
    {/* <Header/> */}
    {/* <Greeting/> */}
    {/* <p style={style1}>The value of PI: {PI}</p>
    <p class="ab">The value of name: {name}</p>
    <p class="ab">Multiplication of 5 and 10: {multiply(5,10)}</p> */}
    {/* <Form/>
    <Footer/> */}
    
{/* <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
  <div className="rounded-2xl shadow-xl p-8 text-center max-w-sm bg-amber-200 border-2">
    <h1 className="text-3xl font-bold text-gray-800 mb-2">Hello {cardname}</h1>
    <p className="text-gray-600">
      Wishing you a wonderful day ahead filled with positivity and smiles
    </p>
  </div>
</div> */}

{/* <Welcome name="Ritik" topic="Props" place="Jalandhar"/>
<Info data={courseDetails}/>
<StudentDetails x={studentDetails}/>
<Student student={stud}/>
<StudentDetails2 x={stud1}/>
<button onClick={()=>alert("Hello")}>Click me</button> */}
<MultiStudent temp={multistudent}/>
    </> 
  )
}
export default App
