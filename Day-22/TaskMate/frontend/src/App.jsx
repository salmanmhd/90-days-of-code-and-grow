import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';
const todoList = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Clean the house', completed: true },
  { id: 3, title: 'Finish React project', completed: false },
  { id: 4, title: 'Exercise for 30 minutes', completed: false },
];

function App() {
  const [todos, setTodos] = useState(todoList);
  function onAddTodo(obj) {
    const newTodos = [...todos, obj];
    setTodos(newTodos);
  }

  function onDelete(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function onComplete(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  }
  return (
    <div className='w-screen h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center'>
      <TodoForm onAddTodo={onAddTodo} />
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default App;
