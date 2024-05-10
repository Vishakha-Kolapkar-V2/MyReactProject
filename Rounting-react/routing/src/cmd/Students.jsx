import React from 'react'

export default function Students(props) {
  return (
    <div>
      <h3>Student Component</h3>
      <h4>Name : <span style={{ color:props.color }}>{props.name}</span></h4>
      <h4>Email : {props.others.email}</h4>
      <h4>City : {props.others.city}</h4>
    </div>
  )
}
