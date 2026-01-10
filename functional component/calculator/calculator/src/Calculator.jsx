import React from "react";

function Calculator(){
    
    const add=()=>{
        
            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);
            const result = a+b;
            document.getElementById("result").innerText=result;
    }
    const sub=()=>{
        
            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);
            const result = a-b;
            document.getElementById("result").innerText=result;
    }
    const multi=()=>{
        
            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);
            const result = a*b;
            document.getElementById("result").innerText=result;
    }
    const div=()=>{
        
            const a = Number(document.getElementById("num1").value);
            const b = Number(document.getElementById("num2").value);
            const result = a/b;
            document.getElementById("result").innerText=result;
    }
    return(
        <>
        <input type="number" id="num1" placeholder="Enter first number: " />
        <input type="number" id="num2" placeholder="Enter second number: " />
        
        <button onClick={add}>Addition</button>
        <button onClick={sub}>Subtracction</button>
        <button onClick={multi}>Multiplication</button>
        <button onClick={div}>Division</button>
        <h1 id="result"></h1>
        </>
    )
}
export default Calculator