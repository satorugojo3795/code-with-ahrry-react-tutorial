// import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


const TextForm = (props) => {

    const handleUpClick = () =>{
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        console.log('Lowercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);    
    }

    const handleOnClick = (event) =>{
        if(event.target.value === "Enter Text Here"){
            setText("")
        }
    }   
    
    const ClearText = () =>{
        setText("");
    }
    const [text,setText] = useState("Enter Text Here");
    return (
        <>
            <h1 style={props.myStyle} >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8" onClick={handleOnClick}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={ClearText}>Clear Text</button>
            <div className="container my-3">
                <p style={props.myStyle} >{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string,
    myStyle: PropTypes.object
  };
export default TextForm
