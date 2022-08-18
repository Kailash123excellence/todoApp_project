import React ,{useState} from "react";

export default function AddTask() {
  const [newTask, setNewTask] = useState({
    task:'',
    status:false
  });

  function addNew(e) {
    const item = setNewTask(e.target.value)
    console.log(newTask);
  }

  function handleSubmit() {
    alert(newTask);
  
  }


  return (
    <>
      
      <form className="inputFrom">
        <p className="form_heading">Todo</p>
        <input
          type="text"
          name="task"
          // checked={newTask}
          className="form-control"
          id="exampleInput"
          value={newTask}
          placeholder="Your Todo...."
          onChange={addNew}
        />
        <label className="form-check-label">{newTask.task}</label>

        <button className="btn border mt-4" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
