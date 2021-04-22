import React, { useState } from 'react';
import ToDoList from './ToDoList';


const App= ()=>
{
  const [inputList, setInputList]=useState(" ");
  const [items,setItems]=useState([]);
  const itemEvent=(event)=>
  {
    if(event.target.value===" ")
      alert("Please add a task");
      
    else
    {
      setInputList(event.target.value);
    }
  };
  const listOfItems=()=>
  {
     setItems((oldItems)=>{
       if(inputList!==" ")
       return [...oldItems,inputList];
       else
         alert("No task added");
         return [...oldItems];
     })
     setInputList(" ");
  };
  const deleteItem=(id)=>
  {
    
    setItems((oldItems)=>{
      return oldItems.filter((arrayElem,index)=>{
         return index!==id;
      });
    })
  };
    return(
      <>
      <div className="main_div">
       <div className="center_div">
       <br />
       <h1>ToDo List</h1>
       <br />
       <input type="text" placeholder="Add tasks" value={inputList} onChange={itemEvent} />
       <button onClick={listOfItems}>+</button>

       <ol>
         {/*<li>{inputList}</li>*/}
          {items.map((itemVal,index)=>{
            return <ToDoList key={index} id={index} text={itemVal} onSelect={deleteItem} />
         })}
       </ol>
       </div>
      </div>
      </>
    );
}

export default App;