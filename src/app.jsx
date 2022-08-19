import React, { useState } from "react";
import './css/index.css'
import ToDoList from './component/TodoList'
export default function App() {
  return (
    <>
      <div className="container">
        <p className="heading">ToDo App</p>
        <ToDoList />
      </div>
    </>
  );
}
