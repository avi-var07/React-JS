import React from "react";
import Home from "./components/Home";
import Props from "./components/Props"
import Parent from "./components/Parent"
const App = ()=>{
  return(
    <>
    <Home />
    <Props name="Aviral" age={20}/>
    <Props name="Ved" age={55}/>
    <Parent name="Aviral Ved Prakash Varshney" age={20} />
    </>
  )
}
export default App;