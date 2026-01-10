import React from 'react'
class Calculator extends React.Component{
    Add=()=>{
        const a = Number(document.getElementById("num1").value);
        const b= Number(document.getElementById("num2").value);
        document.getElementById("result").innerText = a+b;
    }
    Sub=()=>{
        const a = Number(document.getElementById("num1").value);
        const b= Number(document.getElementById("num2").value);
        document.getElementById("result").innerText = a-b;
    }
    Mul=()=>{
        const a = Number(document.getElementById("num1").value);
        const b= Number(document.getElementById("num2").value);
        document.getElementById("result").innerText = a*b;
    }
    Div=()=>{
        const a = Number(document.getElementById("num1").value);
        const b= Number(document.getElementById("num2").value);
        document.getElementById("result").innerText = a/b;
    }

    render(){
        return(
            <>
            <div>
                <input type="number" id = "num1" placeholder="Enter first number"/> 
            </div>
            <div>
                <input type="number" id = "num2" placeholder="Enter second number"/> 
            </div>
            <div>
               <button onClick={this.Add}>Addition</button>
            </div>
            <div>
               <button onClick={this.Sub}>Subtraction</button>
            </div>
            <div>
               <button onClick={this.Mul}>Multiplication</button>
            </div>
            <div>
               <button onClick={this.Div}>Division</button>
            </div>
            <div>
                <h4 id="result">Result: </h4>
            </div>
            
            </>
        )
    }
}
export default Calculator