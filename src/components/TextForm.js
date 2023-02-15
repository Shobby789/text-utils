import React, {useState}  from 'react'

export default function TextForm(props) {
    // converting to upper case
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    // converting to lower case
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    //Changing text color
    const handleClearClick = () => {
        let newText = "";
        document.getElementById('myBox').innerHTML = "";
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("handle on change was clicked");
        setText(event.target.value);
    }
    // this is copy text function
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999); // this line is optional
        navigator.clipboard.writeText(text.value);
    }
    // Removing White Spaces
    const handleWhiteSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    // state
    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control my-3" id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-danger m-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success m-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-dark m-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-secondary m-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-warning text-white" onClick={handleWhiteSpaces}>Remove White Spaces</button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
