import React from "react"
import UserContext from "./components/UserContext";
import Home from "./components/Home";
function App(){
  const name ="Aviral Varshney";
  const age = 20;
 return(
  <>
    <UserContext.Provider value ={{name, age}}>
    <Home />
    </UserContext.Provider>
  </>
)}
export default App;