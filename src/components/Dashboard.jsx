import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import TodoList from './TodoList';
import SearchBar from './SearchBar';

const Dashboard = () => {
  const { handleLogout, handleCreateTodo } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        title: newTodo,
        completed: false,
      };
      handleCreateTodo(todo);
      setNewTodo('');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-500"
      >
        Logout
      </button>
      <SearchBar />
      <TodoList />
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
