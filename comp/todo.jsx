import React, { useState } from 'react';
import './todo.css';
import icon from './../images/check-mark.png';

const Todo = () => {
  const [todo, setTodos] = useState('');
  const [input, setInput] = useState('');
  // const inputData = () => {
  //   setTodos({ todo });
  // };

  function formAction(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValue = Object.fromEntries(formData.entries());
    console.log('Form data:', formValue.query);
    setInput(formValue.query);
  }
  return (
    <div className='todo-main'>
      <div className='top-title'>
        <img src={icon} alt='icons' />
        <h1 className='text-3xl font-bold text-sky-700'>TodoList</h1>
      </div>
      <div className='todo-form'>
        <form onSubmit={formAction} method='post'>
          <input
            type='text'
            name='query'
            placeholder='Add Task...'
            // onChange={() => inputData()}
            // value={todo}
          />
          <input type='button' value='+' />
        </form>
      </div>
      <div className='todo-task'>{input}</div>
    </div>
  );
};

export default Todo;
