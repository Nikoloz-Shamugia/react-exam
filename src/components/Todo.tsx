import React, { useState } from 'react';
import './App.css';

function Todo() {
  const [newItem, setNewItem] = useState('')
  const [items , setItems] = useState([])

  const addItem = () => {
    if(!newItem){
      alert('enter any task')
    }
    else{
    const item = {
      value: newItem
    }
    setItems(oldList => [...oldList, item]);
    setNewItem('');
  
    console.log(items);
  }
  }
  const deleteItem = index => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);

    setItems(updatedItems);
  };


  return (
    <div className="App">

      <h1>Todo App</h1>
      <input
        type='text'
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
      />
      <button onClick={addItem}>click here</button>
      <ul>
        {items.map((item, index) => {
          return(
            <div>
              <li key={index}>{item.value}</li>
              <button onClick={() => deleteItem(index)}>delete</button>
            </div>
          );
        })}
      </ul>

    </div>
  );
}

export default Todo;