interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

let todos: Todo[] = [];

export async function GET() {
  return new Response(JSON.stringify(todos), {
    status: 200,
  });
}
export async function POST(req: Request) {
  const { todo }: { todo: string } = await req.json();
  if (todo) {
    const newTodo = {
      id: todos.length + 1,
      todo,
      completed: false,
    };

    todos.push(newTodo);
    return new Response(JSON.stringify(newTodo), {
      status: 200,
    });
  }

  return new Response('Todo is empty', {
    status: 400,
  });
}
export async function PUT(req: Request) {
  const { id } = await req.json();
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
  });

  return new Response('done', {
    status: 200,
  });
}

export async function DELETE(req: Request) {
  const { id }: { id: number } = await req.json();
  todos = todos.filter((todo) => todo.id !== id);
  return new Response('todo deleted', {
    status: 200,
  });
}
