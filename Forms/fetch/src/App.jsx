import React from "react";
function App(){
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{console.log(data)})
    .catch(err=>{console.log(err)});

    fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name:"Aviral", age:20
      })
    })
}
export default App;