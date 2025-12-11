import React, { useState } from 'react';
import './todo.css';
import icon from './../images/check-mark.png';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  function formAction(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formValue = Object.fromEntries(formData.entries());
    const newTodo = formValue.query;
    if (!newTodo.trim()) return;
    console.log('Form data:', newTodo);
    setTodos((prev) => [...prev, newTodo]);
    event.currentTarget.reset();
  }

  function removeTodo(index) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
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
          <input type='submit' value='+' />
        </form>
      </div>
      <div className='todo-task '>
        {todos.map((item, index) => (
          <div key={index} className='todo-item flex'>
            <p key={index}>{item}</p>
            <button onClick={() => removeTodo(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
