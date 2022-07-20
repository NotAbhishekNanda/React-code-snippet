import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [value, setValue] = useState('Hello World');
  const handleChange = (e) => setValue(e.target.value);
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}
