import React, { useState } from "react";

export default function TextForm(props) {
  const handleText = () => {
    console.log("The initial text is : " + text);
    let changedText = text.toUpperCase();
    console.log("The Changed text is : " + changedText);
    setText(changedText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleLowerCase =()=>
  {
    console.log("clicked on the Lower case button")
    setText(prevText => prevText.toLowerCase())
  }
  const [text, setText] = useState("enter the text");

  //  Wrong Way to change the state
  //  text =  "Demo text"
  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnChange}
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary mx -3" onClick={handleText}>
        Convert to Upper Case
      </button>
      <button className = "btn btn-primary mx-3" onClick = {handleLowerCase}>
        Convert to Lower Case
      </button>
    </div>
  );
}
