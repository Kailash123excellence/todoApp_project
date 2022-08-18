import React from 'react'
import "../css/index.css"
export default function Header(props) {
  return (
      <div className='header_name'>{props.value}</div>

  );
}
