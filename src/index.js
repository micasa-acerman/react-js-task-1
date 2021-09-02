import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  const [name, setName] = useState('Ivan');
  const [show, setShow] = useState(false);

  return (
    <ul>
      {['html', 'css', 'js', 'php'].map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<Hello />, document.getElementById('root'));
