import React, {useReducer} from "react";
function Counter(){
    const reducer = (state, action)=>{
        switch (action.type){
            case "INC":
                return state+1;
            case "DEC":
                return state-1;
            case "RESET":
                return 0;
            default:
                return state;
        }
    };
    const [count, dispatch] = useReducer(reducer, 0);
    return(
        <>
        
        <h1>Count: {count}</h1>

        <button onClick={()=>dispatch({type:"INC"})}>+</button>
        <button onClick = {()=>dispatch({type: "DEC"})}>-</button> 
        <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
        </>
    );
}
export default Counter;