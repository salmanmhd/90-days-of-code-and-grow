// You need to create 4 routes (4 things that the hospital can do)
// 1. GET - User can check how many kidneys they have and their health
// 2. POST - User can add a new kidney
// 3. PUT - User can replace a kidney, make it healthy
// 4. DELETE - User can remove a kidney

const express = require('express');
const app = express();
const port = 3001;

const kidneyDetails = [
  {
    leftKidney: 'fit',
    rightKidney: 'unfit',
  },
  {
    leftKidney: 'fit',
    rightKidney: 'fit',
  },
  ,
  {
    leftKidney: 'unfit',
    rightKidney: 'unfit',
  },
  ,
  {
    leftKidney: 'unfit',
    rightKidney: 'unfit',
  },
];

function checkKidneysHealth(arr) {
  let healthyKidneys = 0;
  let unhealthyKidneys = 0;
  arr.map((obj) => {
    let entries = Object.entries(obj);
    for (const [key, value] of entries) {
      if (value === 'fit') {
        healthyKidneys++;
      } else {
        unhealthyKidneys++;
      }
    }
  });
  return {
    healthy: healthyKidneys,
    unhealthy: unhealthyKidneys,
  };
}

app.get('/', (req, res) => {
  const data = checkKidneysHealth(kidneyDetails);
  const validKidneyDetails = kidneyDetails.filter(Boolean);
  //   res.send(data.toString());
  res.json({ ...data, numberOfKidneys: validKidneyDetails.length * 2 });
});

app.get('/kidneyDetail', (req, res) => {
  const id = parseInt(req.query.id, 10); // Parse the id from query params as an integer

  // Check if id is a valid index and if kidneyDetails[id] exists
  const validKidneyDetails = kidneyDetails.filter(Boolean); // Filter out any undefined or null entries

  if (isNaN(id) || id < 0 || id >= validKidneyDetails.length) {
    return res.status(404).json({ error: 'Kidney details not found' });
  }

  res.json(validKidneyDetails[id]);
});

app.post('/add', (req, res) => {
  const newKidney = req.body; // Get the new kidney details from the request body

  // Ensure the new kidney object has the required properties
  if (!newKidney || !newKidney.leftKidney || !newKidney.rightKidney) {
    return res.status(400).json({ error: 'Invalid kidney details' });
  }

  kidneyDetails.push(newKidney);
  res.json({ message: 'Kidney successfully added', kidneyDetails });
});
app.listen(port, () => {
  console.log(`running on ${port}`);
});
