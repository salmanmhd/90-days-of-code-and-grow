/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs').promises; // Use promises API directly
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to get the list of files
app.get('/files', async (req, res) => {
  try {
    const directoryPath = path.join(__dirname, 'files');
    const files = await fs.readdir(directoryPath);
    res.status(200).json(files);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

// Endpoint to get a specific file's content
app.get('/file/:filename', async (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'files', filename);

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    res.status(200).send(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).send('File not found');
    } else {
      res.status(500).send(`Error: ${error.message}`);
    }
  }
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
