import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const dob = new Date(birthDate);
    const today = new Date();
    const ageDiff = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      setAge(ageDiff - 1);
    } else {
      setAge(ageDiff);
    }
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate</button>
      {age !== null && <p>You are {age} years old.</p>}
    </div>
  );
}

export default App;
