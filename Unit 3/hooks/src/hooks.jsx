import React,{ useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </>
//   );
// }
// const Hook=()=>{
//     const [count, setCount]=useState(0);
//     const increment=()=>{
//         setCount(count+1);
//     }
//     const decrement=()=>{
//         setCount(count-1);
//     }
//     return(
//         <>
//         <h2>Count: {count}</h2>
//         <button onClick={increment}>Increase</button>
//         <button onClick={decrement}>Decrease</button>
//         </>
//     );
// }


const Hook = () => {
  const [name, setName] = useState("Ritik");

  const message = () => {
    setName("Aviral");   // or any name you want to set
  };

  return (
    <>
      <h2>Your name: {name}</h2>
      <button onClick={message}>Show Name</button>
    </>
  );
};

export default Hook;
