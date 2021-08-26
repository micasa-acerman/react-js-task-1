import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState();

  useEffect(() => {
    const cast = Number(value);
    if (cast && cast >= value && cast === Math.round(cast)) {
      let sum = 0;
      for (let i = 1; i <= value; i++) {
        sum += i;
      }
      setResult(sum);
    } else setResult('Введите целое положительное число');
  }, [value]);
  return (
    <div class="form">
      <label for="inputN">N</label>
      <input
        id="inputN"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <span>{result}</span>
    </div>
  );
}
