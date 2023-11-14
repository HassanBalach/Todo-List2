import React, { useState } from "react";
import App from "../App";

function Todo() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (value.trim() !== "") {
      setItems([...items, value]);
      setValue("");
    }
  };

const DeleteItem = (id)=>{
console.log(id)
  const updataData =items.filter((element , index)=>{
    return index !== id

  })
  setItems(updataData)
}


  return (
    <div>
      <div className="bg-slate-500 p-10 flex justify-center items-center ">
        <div className="bg-green-500 w-1/2 flex flex-col justify-center items-center ">
          <figure>
            <img src="" alt="" />
            <figcaption>Add Your list here</figcaption>
          </figure>

          <div>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add items"
            />
            <button className="bg-black text-white " onClick={addItem}>
              Add Task
            </button>
          </div>
         
          <div>
            {
            items.map((element, index) => {
              return(

              <div className="flex flex-row m-2 p-2" key={index}>
                <h3>{element}</h3>
                <button className="bg-black text-white " onClick={() => DeleteItem(index)} >Delete</button>
              </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
