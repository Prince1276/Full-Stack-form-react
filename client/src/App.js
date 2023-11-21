import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users', { id, name, age, salary, email });
      setId('');
      setName('');
      setAge('');
      setSalary('');
      setEmail('');
      alert('User data submitted successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
  <h1>Create User</h1>
  <form onSubmit={handleSubmit}>
    <label htmlFor="id">ID:</label>
    <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} required />

    <label htmlFor="name">Name:</label>
    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

    <label htmlFor="age">Age:</label>
    <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />

    <label htmlFor="salary">Salary:</label>
    <input type="number" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

    <button type="submit">Submit</button>
  </form>
</div>
  );
}

export default App;
