import express, { Request, Response } from 'express';
import zod from 'zod';
import Todo from './db';

const app = express();
app.use(express.json());

const todoSchema = zod.object({
  todo: zod.string(),
  completed: zod.boolean(),
});

app.post('/add-todo', async (req: Request, res: Response) => {
  const body = req.body;
  const zodSchema = todoSchema.safeParse(body);
  const { success } = zodSchema;
  if (!success) {
    return res.status(403).json({
      msg: 'Bad inputs',
    });
  }

  const todo = await Todo.create({
    todo: body.todo,
    completed: body.completed,
  });

  return res.status(200).json({
    msg: 'Todo created successfully',
    todo,
  });
});

app.delete('/delete/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({
        msg: 'Todo not found',
      });
    }

    return res.status(200).json({
      msg: 'Todo deleted successfully',
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
});

app.post('/update/:id', async (req, res) => {
  const id = req.params.id;
  const status: boolean = req.body.status;
  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { completed: status },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({
        msg: 'Todo not found',
      });
    }

    return res.status(200).json({
      msg: 'Todo updated successfully',
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
});

app.get('/', async (req: Request, res: Response) => {
  try {
    const todo = await Todo.find({});
    return res.status(200).json({
      todo,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'Something went wrong',
    });
  }
});

app.listen(3000, () => {
  console.log('running on 3000');
});
