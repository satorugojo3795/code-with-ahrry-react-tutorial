import React, {useState} from 'react';
export default function TextForm(props){
    const handleUpClick = () => {
        // console.log("Upper Case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        // console.log("Upper Case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        // console.log("Upper Case was clicked" + text);
        let newText = ""
        setText(newText);
    }

    const handleTitleClick = () => {
        let newText = text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setText(newText);
    }

    const handleOnChange= (event) => {
        // console.log("On change");
        setText(event.target.value);    
    }
    const [text,setText] = useState("");
    return(
        <>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey'}}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleTitleClick}>Title Text</button>

            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>Your text Summary here</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter in the text box above to get a preview here"}</p>
            </div>
        </>
    )
}