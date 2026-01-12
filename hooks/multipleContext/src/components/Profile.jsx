import React, {useState} from "react";
import UserContext from "./UserContext";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";

function Profile(){
    const {user, setUser} = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);
    const pageStyle = {
        backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
        color: theme === "light" ? "#000000" : "#ffffff",
    };
    return(
        <>
       <div style={pageStyle}>
            <h1>Name: {user}</h1>
            <h3>Current Theme: {theme}</h3>

            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setUser(e.target.value)}
            />

            <br /><br />

            <button style = {pageStyle} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              Toggle Theme
            </button>
        </div>
        </>
    )
}
export default Profile;