import React, { useState } from "react";

const Todo = ({addtodo}) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {

    e.preventDefault();
    addtodo(value);
    setValue("");

  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write the today's task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Todo;
