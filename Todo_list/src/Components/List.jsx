import React from 'react'

function List(props) {
  return (
    <div className='relative m-5 border w-1/3 border-black p-2 '>
      {props.listItem}
      <span><button 
      onClick={(e)=>{
        props.deleteItem(props.index)
      }}
      className='bg-green-600 border border-black p-2 absolute right-0 top-0'>Delete</button></span>
    </div>
  )
}

export default List
