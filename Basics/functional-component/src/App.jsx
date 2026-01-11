import React from "react";
import Home from "./components/Home";
import Props from "./components/Props"
const App = ()=>{
  return(
    <>
    <Home />
    <Props name="Aviral" age={20}/>
    <Props name="Ved" age={55}/>
    </>
  )
}
export default App;