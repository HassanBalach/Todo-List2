import { useState } from "react"
import Inputag from "./Components/Inputag"
import ListOfValue from "./Components/ListOfValue";


function App() {
  //Second step: Taking the value of string into an array:
  const [valInArray, setValInArray] = useState([]);

  const addingValue = (inputvalue)=>{
    setValInArray([...valInArray , inputvalue])
  }
    {/* Third step: From here is started */}
    {/* Forth step: is here */}

    const removeElement = (keyval)=>{
      let removeValue = [...valInArray]
      removeValue.splice(keyval , 1)
      setValInArray([...removeValue])
    }
 

  return (
    <>
    <h1>Todo App</h1>
    <Inputag addingValue={addingValue} />
    {/* The second step is completed here */}
    {/* Third step: From here is started */}

    {valInArray.map((value , index)=>{
      return(
        
        <ListOfValue removeElement={removeElement} index={index} key={index} value={value}/>
      )

    })}
    {/* Forth step: is being start from here */}


    


    </>
  )
}

export default App
