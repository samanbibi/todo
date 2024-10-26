import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Add new task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Move task up in the list
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  // Move task down in the list
  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="to-do-list text-center">
        <h1 className="text-4xl font-bold text-white mb-8">To-Do List</h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="Add a new task"
            className="text-lg p-2 border border-gray-300 rounded-md text-gray-600"
          />
          <button onClick={addTask} className="add-button bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 ml-2 rounded">
            Add Task
          </button>
        </div>
        <ol className="list-none p-0">
          {tasks.map((task, index) => (
            <li key={index} className="text-2xl font-bold bg-gray-100 p-4 mb-4 border border-black rounded flex items-center">
              <span className="flex-1 text-left">{task}</span>
              <button onClick={() => moveTaskUp(index)} className="moveup-button bg-teal-600 hover:bg-teal-800 text-white font-bold py-1 px-3 rounded ml-2">
                Move Up
              </button>
              <button onClick={() => moveTaskDown(index)} className="movedown-button bg-lime-600 hover:bg-lime-700 text-white font-bold py-1 px-3 rounded ml-2">
                Move Down
              </button>
              <button onClick={() => deleteTask(index)} className="delet-button bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-3 rounded ml-2">
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
