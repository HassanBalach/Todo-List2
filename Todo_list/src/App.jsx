import { useState } from "react";
import InputElement from "./Components/InputElement";
import List from "./Components/List";

function App() {
  const [addTask, setAddTask] = useState([]);
  let addList = (InputText) => {
    setAddTask([...addTask, InputText]);
  };
  
  const deleteItem = (key)=>{
    let newTaskArray = [...addTask]
    newTaskArray.splice(key ,1)
    setAddTask([...newTaskArray])
  }

  return (
    <>
      <InputElement addList={addList} />
      <h1>TODO</h1>
      <hr />
      {addTask.map((listItem, index) => {
        return(
          
          <List key={index} index={index} listItem={listItem} deleteItem={deleteItem} />
        )
        
      })}
    </>
  );
}

export default App;
