import React from "react";
import { useState } from "react";
import "../css/index.css";
import Header from "./Header";

export default function ToDOList(props) {
  const [todoList, setTodoList] = useState([]);
  const [newTodoList, setNewTodoList] = useState({
    task: "",
    status: false,
  });

  const [Total_Task, setTotal_Task] = useState(todoList);

  function handleSubmit(e) {
    e.preventDefault();
      todoList.push(newTodoList);
      const name = e.target.name;
      const value = e.target.value;
      setNewTodoList({
        ...value,
        [name]: value,
      });
  }

  function addNew(e) {
    setNewTodoList({ task: e.target.value });
    
  }

  const handleOnChange = (index) => {
    const updatedStatus = todoList.map((val, i) => {
      if (index !== i) {
        return val;
      } else {
        return {
          ...val,
          status: !val.status,
        };
      }
    });
    setTotal_Task(updatedStatus);
    setTodoList(updatedStatus);
  };

  function Complete() {
    const Completed_task = todoList.filter((value) => {
      return value.status == true;
    });
    if (Completed_task.length > 0) {
      setTotal_Task(Completed_task);
      
    } else {
      alert("No task Completed yet");
    }
  }

  function Incomplete() {
    const InCompleted = todoList.filter((val) => {
      return val.status !== true;
    });
    if (InCompleted.length > 0) {
      setTotal_Task(InCompleted);
    
    } else {
      alert("All Task Completed");
    }
  }

  function Total() {
    const totalTask = todoList.map((val) => {
      return val;
    });
    setTotal_Task(totalTask);
    
  }

  function Delete_Task(index) {
    const DeletedItem = Total_Task.filter((val, i) => index !== i);
    setTotal_Task(DeletedItem);

    const DeletedItems = todoList.filter((val, i) => index !== i);
    setTodoList(DeletedItems);
  }

  return (
    <>
      <div className="form-check1 ">
        {/* Todo header */}
        <div className="header">
          <Header value={"TaskName"} />
          <Header value={"Delete"} />
          <Header value={"Status"} />
        </div>


        {/* todo task filter */}
        {Total_Task.map((value, index) => {
          return (
            <div className="inputData">
              <input
                className="form-check-input"
                type="checkbox"
                checked={value.status}
                name="abc"
                id="flexCheckDefault"
                onChange={() => handleOnChange(index)}
              />
              <label className="form-check-label">{value.task}</label>
              <button
                className="delete_task"
                onClick={() => Delete_Task(index)}
              >
                <span class="material-symbols-outlined">delete_forever</span>
              </button>
              {value.status == true ? (
                <p className="complete" id="checkComplete">
                  complete
                </p>
              ) : (
                <p className="Incomplete" id="checkComplete">
                  Incomplete
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* task status check buttons */}

      {todoList.length > 0 ? (
        <div className="collection">
          {/* <Task_Status item="Complete" onClick={Complete} />
          <Task_Status item="Incomplete" onClick={Incomplete} />
          <Task_Status item="Total" onClick={Total} /> */}

          <button className="getbutton" onClick={Complete}>
            Complete
          </button>

          <button className="getbutton" onClick={Incomplete}>
            Incomplete
          </button>

          <button className="getbutton" onClick={Total}>
            Total Task
          </button>
        </div>
      ) : (
        <h3 className="title_BeforeTask">No Task yet</h3>
      )}

      {/* add new todo form */}

      <form className="inputFrom" onSubmit={(e) => handleSubmit(e)}>
        <p className="form_heading">Todo</p>
        <input
          type="text"
          name="task"
          checked={(newTodoList.status = false)}
          className={`form-control`}
          id="exampleInput"
          required
          value={newTodoList.task ? newTodoList.task : ""}
          placeholder="Your Todo...."
          onChange={addNew}
        />
        <button className="btn border mt-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
