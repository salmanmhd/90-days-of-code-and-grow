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
    });

    res.status(200).json({
      title: obj.title,
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
    const todoItem = await todo.findById(idObj.id);
    const isComplete = todoItem.completed;
    console.log('todoItem: --', todoItem);

    const result = await todo.findByIdAndUpdate(
      { _id: idObj.id },
      { completed: !isComplete },
      { new: true }
    );

    res.status(200).json({
      todo: result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error,
    });
  }
});

app.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await todo.deleteOne({ _id: id });
    console.log(result);
    if (result.acknowledged) {
      res.status(200).json({
        msg: 'Deleted successfully!',
      });
    } else {
      res.status(404).json({
        msg: 'To do not found',
      });
    }
  } catch (error) {
    console.log('error: ', error);
    res.json({ error });
  }
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
