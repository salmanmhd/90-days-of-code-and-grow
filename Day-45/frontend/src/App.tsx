import { useState } from "react";

interface todoObject {
  _id: string;
  todo: string;
  completed: boolean;
}
const todoItems: todoObject[] = [
  {
    _id: "1",
    todo: "go to gym",
    completed: false,
  },
  {
    _id: "2",
    todo: "complete TypeScript assignment",
    completed: false,
  },
  {
    _id: "3",
    todo: "buy groceries",
    completed: false,
  },
  {
    _id: "4",
    todo: "read a book",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(todoItems);
  function handleComplete(id: string) {
    setTodos((prevtodo) =>
      prevtodo.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }
  function handleAddTodo(todo: todoObject) {
    setTodos([...todos, todo]);
  }
  return (
    <div className="flex flex-col justify-center pt-4 text-white">
      <h1 className="text mb-8 py-4 pl-10 text-4xl font-bold shadow-sm shadow-slate-950">
        Todo List
      </h1>
      <AddTodo addTodo={handleAddTodo} />
      <div className="w-128 h-110 ml-12 mt-16 overflow-y-auto bg-slate-950 px-4 py-6 shadow-sm shadow-slate-950">
        {todos.map((todo, index) => (
          <TodoItems key={index} todo={todo} handleComplete={handleComplete} />
        ))}
      </div>
    </div>
  );
}

interface AddTodoProps {
  addTodo: (todo: todoObject) => void;
}
function AddTodo({ addTodo }: AddTodoProps) {
  const [todo, setTodo] = useState("");

  return (
    <form
      className="w-128 ml-12 flex items-center justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          _id: new Date().toString(),
          todo,
          completed: false,
        });
        setTodo("");
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          e.preventDefault();
          setTodo(e.target.value);
        }}
        placeholder="Todo..."
        className="w-96 border-b border-slate-300 bg-transparent py-2 text-xl text-slate-100 transition duration-200 ease-in-out placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring focus:ring-transparent"
      />
      <button className="rounded-md border border-slate-950 bg-slate-950 px-6 py-2 text-slate-100 hover:bg-slate-800">
        Add Todo
      </button>
    </form>
  );
}
interface TodoItemsProps {
  todo: todoObject;
  handleComplete: (id: string) => void;
}
function TodoItems({ todo, handleComplete }: TodoItemsProps) {
  return (
    <div className="my-4 flex justify-between">
      <h1 className="text-xl">{todo.todo}</h1>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleComplete(todo._id)}
      />
    </div>
  );
}

export default App;
