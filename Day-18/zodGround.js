const z = require('zod');
const express = require('express');
const app = express();
app.use(express.json());

const stringSchema = z.string();
const numberSchema = z.number();
const arrOfNUmber = z.array(z.number());

app.post('/verify', (req, res) => {
  const obj = req.body.user;
  const objSchema = z.object({
    username: stringSchema,
    email: stringSchema.email(),
    password: stringSchema.min(6),
    marks: arrOfNUmber,
  });
  const userData = objSchema.safeParse(obj);
  if (!userData.success) {
    res.status(404).json(userData.error);
  }

  const user = userData.data;
  res.status(200).json(user);
});

const a = {
  success: false,
  error: {
    issues: [
      {
        code: 'invalid_type',
        expected: 'string',
        received: 'number',
        path: [],
        message: 'Expected string, received number',
      },
    ],
    name: 'ZodError',
  },
};

app.listen(3000, () => {
  console.log('running on 3000');
});
