import React from 'react'

export default function TodoStatusButton(props) {

  return (
    <>
      <button className="getbutton" onClick={props.Completed_Task}>
        {props.name}
      </button>
    </>
  );
}
