import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch('http://localhost:3001/todo');
    //   const data = await res.json();
    //   setTodos(data.data);
    //   console.log(data.data);
    // }

    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch('http://localhost:3001/todo');
    const data = await res.json();
    setTodos(data.data);
    console.log(data.data);
  }

  async function onAddTodo(obj) {
    const response = await fetch('http://localhost:3001/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    });

    if (response.ok) {
      fetchData();
    } else {
      console.error('Failed to add todo:', response.statusText);
    }
  }

  async function onDelete(id) {
    const response = await fetch(`http://localhost:3001/todo/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const newTodos = todos.filter((todo) => todo._id !== id);
      setTodos(newTodos);
    } else {
      console.log('todo not deleted');
    }
  }

  async function onComplete(id) {
    console.log('id', id);
    const response = await fetch('http://localhost:3001/completed', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id),
    });

    if (response.ok) {
      const data = await response.json();
      const updatedTodo = data.todo;

      const newTodos = todos.map((prevTodos) =>
        updatedTodo._id === prevTodos._id ? updatedTodo : prevTodos
      );
      setTodos(newTodos);
    } else {
      console.log('Not able to mark completed');
    }
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
