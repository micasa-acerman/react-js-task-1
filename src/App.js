import React, { useState } from 'react';
import './App.css';

const initialTasks = [
  {
    id: '1',
    name: 'тестовое задание 1',
    checked: false
  },
  {
    id: '2',
    name: 'тестовое задание 2',
    checked: false
  }
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="container">
      <h2>Todo</h2>
      {tasks.length ? (
        <ul className="posts">
          {tasks.map(task => (
            <div key={task.id} className="posts__item">
              <input
                type="checkbox"
                checked={task.checked}
                onChange={e => {
                  setTasks([
                    ...tasks.filter(t => t.id !== task.id),
                    { ...task, checked: e.target.checked }
                  ]);
                }}
              />
              <div className="posts__inner">
                <h4
                  style={{
                    textDecoration: 'text-decoration'
                  }}
                >
                  {task.name}
                </h4>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className="alert">Empty</div>
      )}

      <button onClick={() => setTasks(tasks.slice(0, tasks.length - 1))}>
        Remove last
      </button>
    </div>
  );
}
