import React, {useContext} from "react";
import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";

function Profile(){
    const {user, setUser} = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

    const style = {
        backgroundColor: theme==="light"?"#ffffff":"#1e1e1e",
        color: theme==="light"?"#000000":"#ffffff"
    };
    const handleChange = (e)=>{
        setUser(e.target.value);
    }
    const handleClick = () =>{
        setTheme(theme==="light"?"dark":"light");
    }
    return(
        <>
        <div style={style}>
        <input type="text" placeholder="Enter name: " onChange={handleChange} value={user}/>
        <br />
        <br />
        <button style = {style} onClick={handleClick}>Toggle</button>
        </div>
        </>
    )
}
export default Profile;