import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const renderElement = () =>
  ReactDOM.render(
    <div className="container">
      <h2>Задание 2</h2>
      <p>Текущее время: {new Date().toLocaleTimeString()}</p>
    </div>,
    document.getElementById('root')
  );

setInterval(renderElement, 500);
