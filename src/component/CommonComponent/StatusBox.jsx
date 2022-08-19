import React from 'react'

export default function StatusBox(props) {
  return (
    <>
      <p className={props.className} id="checkComplete">
        {props.name}
      </p>
    </>
  );
}
