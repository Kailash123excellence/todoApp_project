import React from 'react'

export default function EventButton(props) {
  return (
    <>
      <button className={props.className} onClick={props.UpdateEvent}>
        <span className="material-symbols-outlined">{props.name}</span>
      </button>
    </>
  );
}
