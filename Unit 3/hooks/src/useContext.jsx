import React, {useState, createContext, useContext, Children} from "react";

const ThemeContext = createContext();
const ThemeProvider = ([children])=>{
    const [theme, setTheme] = useState("light");
    const toggleTheme = ()=> setTheme((prev)=>(prev==='light'?'dark':'light'));

    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    );
};

const ThemeComponent = ()=>{
    const {theme, toggleTheme}  = useContext(ThemeContext);
    const isLight = theme ==='light';
    return (
        <div style={{
            backgroundColor: isLight?'#fff':'#333',
            color: isLight?'#000':'#fff',
            padding: 20,
            textAlign: 'center',

        }}>
            <h1>{isLight? 'Light Theme':'Dark Theme'}</h1>
            <button onClick={toggleTheme}>Toggle Button</button>
        </div>
    )
}