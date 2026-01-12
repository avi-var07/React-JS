import React, {useState} from "react";
import UserContext from "./components/UserContext";
import ThemeContext from "./components/ThemeContext";
import Home from "./components/Home"
function App(){
  const [user, setUser] = useState("Aviral Varshney");
  const [theme, setTheme ] = useState ("light");
  return(

  <UserContext.Provider value = {{user, setUser}}>
    <ThemeContext.Provider value = {{theme, setTheme}}>
      <Home />
    </ThemeContext.Provider>
  </UserContext.Provider>
  );
}
export default App;