import React from 'react'

function ChildComponent(props){
  return (
    <div><h1>{props.name}, {props.parameter}</h1></div>
  )
}

export default ChildComponent