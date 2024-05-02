import React, { useState } from 'react';

const TodoItem = ({ todo, handleDeleteTodo, handleUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleToggleComplete = () => {
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedTitle.trim()) {
      handleUpdateTodo({
        ...todo,
        title: editedTitle,
      });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  return (
    <li className="flex items-center justify-between py-2 border-b border-gray-300">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="flex-grow px-2 py-1 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring focus:border-blue-500"
          />
          <div className="flex">
            <button
              onClick={handleSaveEdit}
              className="px-4 py-1 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="ml-2 px-4 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <span
            className={todo.completed ? 'line-through cursor-pointer' : 'cursor-pointer'}
            onClick={handleToggleComplete}
          >
            {todo.title}
          </span>
          <div className="flex">
            <button
              onClick={handleEdit}
              className="px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="ml-2 px-4 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
