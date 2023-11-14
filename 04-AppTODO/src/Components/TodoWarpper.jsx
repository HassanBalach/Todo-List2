import React, { useState } from 'react'
import Todo from './todo'
import TodoForm from './todoForm';
// import {v4 as uuidv4} from 'uuid';
// uuidv4();
// id: uuidv4(),


const TodoWarpper = () => {
    const [todos, settodos] = useState([]);
const addtodo = addtodo =>{
    settodos([...todos , { task: addtodo, completed: false, isEditing: false } ] )
    console.log(todos)
}

  return (
    <div>
      <Todo addtodo={addtodo} />
      <TodoForm />

    </div>
  )
}

export default TodoWarpper
