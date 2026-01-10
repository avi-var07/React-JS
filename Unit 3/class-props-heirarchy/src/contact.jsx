import React from 'react';
function Contact(props){
     return(
        <>
        <p>First Contact No: {props.contact1}</p>
        <p>Second Contact No: {props.contact2}</p>
        <p>Third Contact No: {props.contact3}</p>
        </>
     )
}
export default Contact;