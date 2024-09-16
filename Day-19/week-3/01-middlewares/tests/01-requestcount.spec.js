// const app = require("../01-requestcount");

// const request = require('supertest');
// const assert = require('assert');
// describe('GET /user', function() {
//   it('One request responds with 1', function(done) {
//     request(app)
//       .get('/requestCount')
//       .then(response => {
//         expect(response.body.requestCount).toBe(1);
//         done();
//       })
//   });

//   it('10 more requests log 12', function(done) {
//           for (let i = 0; i<10; i++) {
//             request(app)
//                   .get('/user')
//                   .then();
//           }
//           request(app)
//               .get('/requestCount')
//               .then(response => {
//                 expect(response.body.requestCount).toBe(12);
//                 done();
//               })
//       });
// });
const request = require('supertest');
const app = require('../01-requestcount'); // Ensure the correct path to your Express app

describe('GET /user', () => {
  it('One request responds with 1', async () => {
    const response = await request(app).get('/requestCount');
    expect(response.body.requestCount).toBe(1); // Jest assertion
  });

  it('10 more requests log 12', async () => {
    // Make 10 requests to the /user endpoint
    const promises = Array.from({ length: 10 }, () =>
      request(app).get('/user')
    );
    await Promise.all(promises);

    // Now check the request count
    const response = await request(app).get('/requestCount');
    expect(response.body.requestCount).toBe(12); // Jest assertion
  });
});
