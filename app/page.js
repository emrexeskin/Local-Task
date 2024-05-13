"use client"
import { useState,React } from 'react';


export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

    const addTask = () => {
      if (input.trim() === '') return;
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    };
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };
  
    const toggleCompleted = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
  return (
   <main className="flex flex-col items-center justify-center pt-10 mx-48">
     <div className="w-full flex items-center gap-2 justify-center mb-20 h-12">
      <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Add a task..." type="text" className="w-1/2 h-full indent-4 bg-black text-white border-2 border-white outline-0 placeholder:text-white"></input>
      <button 
      onClick={addTask}
      className="px-3 py-2 h-full bg-black text-white border-2 border-white ">Add Task</button>
     </div>
     <div className="w-2/3 flex items-center gap-2 justify-center">
      <ul className="flex flex-col items-center justify-center gap-1 w-full ">
      {tasks.map((task) => (
        <li 
        key={task.id}
        className={`flex items-center justify-between w-full p-2 border-2 bg-black border-2 border-white hover:scale-x-105 duration-300 indent-4 ${task.completed ? 'line-through text-gray-500' : ''}`}> 
            <span>{task.text}</span>
            <div>

              <button
              onClick={() => toggleCompleted(task.id)}
              className="bg-transparent border-2 border-lime-300 text-lime-300 text-white px-2 py-1 mr-2 hover:font-medium">{task.completed ? 'Undo' : 'Complete'}</button>
              
              <button
               onClick={() => deleteTask(task.id)}
              className="bg-transparent border-2 border-rose-400 text-rose-400 text-white px-2 py-1 hover:font-medium">Delete</button>
            </div>
            </li>
             ))}
      </ul>
     </div>
   </main>
  );
}
