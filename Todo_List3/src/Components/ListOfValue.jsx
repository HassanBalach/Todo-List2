import React from 'react'

function ListOfValue(props) {
 
  return (
    <div>
     {props.value}
     <button
    onClick={(e)=>{
        props.removeElement(props.index)
    }}
     >Remove</button>
    </div>
  )
}

export default ListOfValue
