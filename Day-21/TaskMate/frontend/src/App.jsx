import TodoList from './TodoList';
import TodoForm from './TodoForm';
const todos = [
  { id: 1, title: 'Buy groceries', completed: false },
  { id: 2, title: 'Clean the house', completed: true },
  { id: 3, title: 'Finish React project', completed: false },
  { id: 4, title: 'Exercise for 30 minutes', completed: false },
  { id: 5, title: 'Read 50 pages of a book', completed: true },
  { id: 6, title: 'Call mom', completed: false },
  { id: 7, title: 'Pay electricity bill', completed: true },
  { id: 8, title: 'Organize desk', completed: false },
  { id: 9, title: 'Write blog post', completed: true },
  { id: 10, title: 'Plan weekend trip', completed: false },
];

function App() {
  function onAddTodo(obj) {}
  return (
    <div className='w-screen h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center'>
      <TodoForm />
      {todos.map((todo) => (
        <TodoList key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
