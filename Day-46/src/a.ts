import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const URI = process.env.URI;
const client = new Client({
  connectionString: URI,
});

async function insertData() {
  try {
    await client.connect();
    const insertQuery =
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3);';
    const values = ['username2', 'user3@example.com', 'user_password'];
    const res = await client.query(insertQuery, values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

insertData();

async function getUser(email: string) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'mysecretpassword',
  });

  try {
    await client.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
// getUser('user5@example.com').catch(console.error);

// async function createTable() {
//   await client.connect();
//   const result = await client.query(`
//     CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP);
//         `);
//   console.log(result);
// }

// createTable();
