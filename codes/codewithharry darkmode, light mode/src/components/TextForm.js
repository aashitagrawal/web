import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";


export default function TextForm(props) {

    const upperCase = () =>{
        console.log("Uppercase was clicked");
        setText(text.toUpperCase());
    }

    const lowerCase = () =>{
        console.log("Lowercase was clicked");
        setText(text.toLowerCase());
    }

    const handleTheChange = (event) =>{
        console.log("Change was handled");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here");
    // text = "New text here" //wrong way to change the state
    // setText("New text here"); //Correct way to change the state
    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleTheChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={upperCase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={lowerCase}>Convert to lowercase</button>
        </div>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string
}