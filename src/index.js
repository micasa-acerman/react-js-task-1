import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  const [name, setName] = useState('Ivan');
  const [show, setShow] = useState(false);

  return (
    <div>
      {show ? 'Привет' : 'Пока'} {name}
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById('root'));
