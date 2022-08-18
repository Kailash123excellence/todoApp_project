import React from "react";
import { useState } from "react";

export default function Task_Status(props) {
  // const [todoList,settodoList]=useState([props.todoList])
  // const [Total_Task, setTotal_Task]=useState([props.Total_Task])
  
  // function Complete() {
  //   const Completed_task = todoList.filter((value) => {
  //     return value.status == true;
  //   });
  //   if (Completed_task.length > 0) {
  //     setTotal_Task(Completed_task);
  //   } else {
  //     alert("No task Completed yet");
  //   }
  // }

  return (
    <>
      <button className="getbutton" onClick={props.item} todoList={props.todoList}>
        {props.value}
      </button>
    </>
  );
}
