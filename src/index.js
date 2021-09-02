import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Hello() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {digits.map((d, i) => (
        <>
          <span id={`${i}`}>{d + 3}</span>
          <br />
        </>
      ))}
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById('root'));
