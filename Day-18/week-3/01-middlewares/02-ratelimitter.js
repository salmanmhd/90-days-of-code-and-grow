const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
app.use(express.json());
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

// let numberOfRequestsForUser = {};
// setInterval(() => {
//   numberOfRequestsForUser = {};
// }, 1000);

let numberOfRequestsForUser = {};
function name(user) {
  const entries = Object.entries(numberOfRequestsForUser);
  for (let [key, value] of entries) {
    if (key === user) {
      numberOfRequestsForUser[user] += 1;
      console.log(numberOfRequestsForUser);
      return;
    }
  }
  numberOfRequestsForUser[user] = 1;
}

function timer() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const entries = Object.entries(numberOfRequestsForUser);

      for (let [key, value] of entries) {
        if (value >= 5) {
          reject(false);
        }
      }
      resolve(true);
      numberOfRequestsForUser = {};
    }, 1000);
  });
}
async function friction(req, res, next) {
  const user = req.headers.user - id;
  name(user);
  const response = await timer();
  if (response === false) {
    res.status(500).res.json({
      msg: 'You have exceeded the limits',
    });
  }
  // numberOfRequestsForUser
}

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(3000, () => {
  console.log(`running on 3000`);
});

module.exports = app;
