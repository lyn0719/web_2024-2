import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../features/todo/todoSlice';
import { FaTrash } from 'react-icons/fa';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className="todo-container">
      <h2>할 일 목록</h2>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="새로운 할 일을 입력하세요"
          className="todo-input"
        />
        <button type="submit" className="todo-add-button">추가</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="todo-checkbox"
              />
              <span className={todo.completed ? 'completed' : ''}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="todo-delete-button"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo; 