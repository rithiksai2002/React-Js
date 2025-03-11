import React, { useState } from "react";

export default function TextForm(props) {
  const handleText = () => {
    console.log("The initial text is : " + text);
    let changedText = text.toUpperCase();
    console.log("The Changed text is : " + changedText);
    setText(changedText);
  };

  // This is used to listen i.e to notice that if any changes are done to the text area 
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleLowerCase = () => {
    console.log("clicked on the Lower case button")
    setText(prevText => prevText.toLowerCase())
  }
  const [text, setText] = useState("");

  //  Wrong Way to change the state
  //  text =  "Demo text"
  return (
    <>
    <div className = "container">
          <h1>{props.heading} </h1>
          <div className="mb-3">
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text}  ></textarea>
          </div>
          <button className="btn btn-primary mx -3" onClick={handleText}>  Convert to Upper Case
          </button>
          <button className="btn btn-primary mx-3" onClick={handleLowerCase}>  Convert to Lower Case
          </button>
    </div>
    <div className="container my-3">
         <h3>Your Text Summary</h3>
         <p>{(text.split(" ")).length -1} words, {text.length} characters</p>
         <p>{0.008 * ((text.split(" ")).length -1)} minutes to read</p>
      
    </div>
    </>
  );
}
