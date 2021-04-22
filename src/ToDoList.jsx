import React, { useState } from 'react';
const ToDoList=(props)=>
{
  const [line,setLine]=useState(false);
  const cutIt = ()=>
  {
    setLine(true);
  };
    return(
      <>
      <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id);
        }} />
        <i className="fa fa-check" aria-hidden="true" onClick={cutIt}/>
        <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
      </div>
      </>
    );
};

export default ToDoList;