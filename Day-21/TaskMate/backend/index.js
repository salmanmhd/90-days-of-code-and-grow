const express = require('express');
const { todoSchema, updateSchema } = require('./types');
const { todo } = require('./db');
const PORT = 3001;
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/todo', async (req, res) => {
  const data = await todo.find({});
  res.status(200).json({ data });
});

app.post('/todo', async (req, res) => {
  const obj = req.body;
  const parsePayload = todoSchema.safeParse(obj);
  if (!parsePayload) {
    return res.status(411).json({
      msg: 'You send the wrong inputs',
    });
  }

  try {
    await todo.create({
      title: obj.title,
      description: obj.description,
      completed: false,
    });

    res.status(200).json({
      msg: 'To do created',
      title: obj.title,
      desc: obj.description,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
});

app.put('/completed', async (req, res) => {
  const idObj = req.body;
  const parsePayload = updateSchema.safeParse(idObj);
  if (!parsePayload) {
    res.json({
      msg: 'You entered wrong input for id',
    });
  }
  try {
    const result = await todo.updateOne({ _id: idObj.id }, { completed: true });

    res.status(200).json({
      msg: 'marked completed',
      todo: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
