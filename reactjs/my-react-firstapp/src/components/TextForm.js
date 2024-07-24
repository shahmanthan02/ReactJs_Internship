// import React from 'react';
import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("UpperCase is clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleLoClick = () =>{
        console.log("Lowercase is clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("OnChange");
        setText(event.target.value);
    }
    const [text,setText]= useState("Enter text here ");
    // text = "new text"; //Wrong way to change the text
    // setText("new text") ; //corret way to change the text
    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

        <div className="container my-2">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words, {text.length }characters</p>
            <p>{0.008* text.split(" ").length } Miniutes Read</p>
            <h3>Preview</h3>
            <p>{text}</p>

        </div>
        </>
    )
}
