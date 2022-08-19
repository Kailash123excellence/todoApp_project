import React from "react";

export default function AddNewTodoForm(props) {
  return (
    <>
      <form className="inputFrom" onSubmit={props.handleSubmit}>
        <p className="form_heading">Todo</p>
        <input
          type="text"
          name="task"
          checked={(props.todoDefaultStatus)}
          className={`form-control`}
          id="exampleInput"
          required
          value={props.todoValue ? props.todoValue : ""}
          placeholder="Your Todo...."
          onChange={props.addNew}
        />
        <button className="btn border mt-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
