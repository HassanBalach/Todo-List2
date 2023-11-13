import React, { useState } from "react";

function Inputag(props) {
  const [inputvalue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add Your Task"
      />
      <button
        onClick={() => {
          props.addingValue(inputvalue);
          setInputValue("");
        }}
      >
        Add Task
      </button>
      <br />
    </div>
  );
}
//First step is completed here by taking value from the input:
//Second step: put the value of string into an array:
//Third step : making a list component:
//Forth step : making remove button
export default Inputag;
