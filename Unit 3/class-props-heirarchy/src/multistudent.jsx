import React from 'react';
import Mail from './mail.jsx';
import contact from './contact.jsx';
function MultiStudent({temp}){
    return(
        <>
        <p>Name: {temp.name}</p>
        <p>Age: {temp.age}</p>
        <p>Email: </p>
        <Mail email1="ritik2662004@gmail.com" email2="aayush@example.com" email3="ajay@example.com"/>
        <p>Contact No: </p>
        <Contact contact1="1234567890" contact2="0987654321" contact3="1122334455"/>
        </>
    )
}
export default MultiStudent;