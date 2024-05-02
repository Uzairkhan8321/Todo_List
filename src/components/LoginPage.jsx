import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin, username, setUsername, password, setPassword } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic
    handleLogin();
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-500">
      <div className="bg-white shadow-md rounded-md px-10 py-12 w-full sm:w-96 max-w-md">
        <h2 className="text-6xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-lg font-semibold text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              className="form-input mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              className="form-input mt-1 block w-full h-12 rounded-md border border-gray-300 shadow-sm focus:ring focus:ring-blue-500 focus:outline-none focus:border-blue-500 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
