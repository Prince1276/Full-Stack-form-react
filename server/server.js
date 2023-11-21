const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432, // Change if necessary
  database: 'postgres',
});

// Create a table called "users" in your PostgreSQL database using the following SQL query:
// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(255) NOT NULL,
//   age INTEGER NOT NULL,
//   salary NUMERIC(10, 2) NOT NULL,
//   email VARCHAR(255) NOT NULL
// );

app.post('/api/users', async (req, res) => {
  const { id, name, age, salary, email } = req.body;
  const query = 'INSERT INTO users (id, name, age, salary, email) VALUES ($1, $2, $3, $4, $5)';
  const values = [id, name, age, salary, email];

  try {
    await pool.query(query, values);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error inserting user:', error);
    res.sendStatus(500);
  }
});

const port = 5000; // Change this to the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
