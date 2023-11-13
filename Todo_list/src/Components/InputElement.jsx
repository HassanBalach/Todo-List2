import { useState } from "react";

function InputElement(props) {
  const [InputText, setInputText] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add Your Task"
          className="bg-green-400 placeholder:text-white"
          value={InputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="bg-blue-700 rounded-full p-0.5 m-2 w-7 h-7"
           onClick={() => {
             props.addList(InputText)
             setInputText("");
           }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default InputElement;
