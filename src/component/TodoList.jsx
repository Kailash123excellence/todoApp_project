import React from "react";
import { useState } from "react";
import "../css/index.css";
import Header from "./CommonComponent/Header";
import TodoStatusButton from "./CommonComponent/TodoStatusButton";
import AddNewTodoForm from "./CommonComponent/AddNewTodoForm";
import EventButton from "./CommonComponent/EventButton";
import StatusBox from "./CommonComponent/StatusBox";

export default function ToDOList(props) {
  const [todoList, setTodoList] = useState([]);
  const [newTodoList, setNewTodoList] = useState({
    task: "",
    status: false,
  });

  const [Total_Task, setTotal_Task] = useState(todoList);

  const [editTable, setEditTable] = useState("");

  function SubmitHandler(e) {
    e.preventDefault();
    todoList.push(newTodoList);
    
    const {
      target: { name, value },
    } = e;
    
    setNewTodoList({
      ...value,
      [name]: value,
    });
  }

  function addNewTask(e) {
    setNewTodoList({task:e.target.value});
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


  // TaskStatusType checking
  function TaskStatusChecking(state) {
    const Complete_task=todoList.filter((val)=>{
      if(state=="complete"){
        return val.status ==true;
      }else{
        return val.status !== true;
      }
    })
    if(Complete_task.length>0){
      setTotal_Task(Complete_task)
    }else{
      alert("all task Either Completed or Incomplete")
    }
  }


  function Total() {
    const totalTask = todoList.map((val, index) => {
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

  function handleEdit(index) {
    setEditTable((prevState) => {
      if (prevState === index) {
        return "";
      } else {
        return index;
      }
    });
  }

  function edit_Task(e, index) {
    const UpdateEdit = todoList.map((val, i) => {
      if (i === index) {
        return {
          ...val,
          task: e.target.value,
        };
      }
      return val;
    });
    setTotal_Task(UpdateEdit);
  }

  return (
    <>
    
      <div className="form-check1 ">
        {/* Todo header */}
        <div className="header">
          <Header value={"TaskName"} />
          <Header value={"Delete /xx Edit"} />
          <Header value={"Status"} />
        </div>

        {/* todo task filter */}
        {Total_Task.map((value, index) => {
          return (
            <div className="inputData" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={value.status}
                name="abc"
                id="flexCheckDefault"
                onChange={() => handleOnChange(index)}
              />
              {editTable === index ? (
                <input
                  value={value.task}
                  type="text"
                  onChange={(e) => edit_Task(e, index)}
                />
              ) : (
                <label className="form-check-label">{value.task}</label>
              )}

              {/* Delete Button */}
              <EventButton
                className={"delete_task"}
                name={"Delete"}
                UpdateEvent={() => Delete_Task(index)}
              />

              {/* Edit Button */}
              <EventButton
                className={"edit_task"}
                name={"Edit"}
                UpdateEvent={() => handleEdit(index)}
              />

              {/* Status complete or incomplete button */}
              {value.status == true ? (
                <StatusBox className="complete" name={"Complete"} />
              ) : (
                <StatusBox className="Incomplete" name={"Incomplete"} />
              )}
            </div>
          );
        })}
      </div>

      {/* task status check buttons */}

      {todoList.length > 0 ? (
        <div className="collection">
          <TodoStatusButton
            name="Complete"
            Completed_Task={()=>TaskStatusChecking("complete")}
          />
          <TodoStatusButton
            name="Incomplete"
            Completed_Task={()=>TaskStatusChecking("Incomplete")}
          />
          <TodoStatusButton name="Total" Completed_Task={() => Total()} />
        </div>
      ) : (
        <h3 className="title_BeforeTask">No Task yet</h3>
      )}

      {/* add new todo form */}

      <AddNewTodoForm
        handleSubmit={(e) => SubmitHandler(e)}
        todoValue={newTodoList.task}
        todoDefaultStatus={(newTodoList.status = false)}
        addNew={addNewTask}
      />
    </>
  );
}
