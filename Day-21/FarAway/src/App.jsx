import { useState } from 'react';
import './index.css';
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
];
function App() {
  const [items, setItems] = useState(initialItems);

  function addItems(obj) {
    setItems((items) => [...items, obj]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className='app'>
      <Logo />
      <Form
        items={items}
        onAddItems={addItems}
        onDeleteItems={handleDeleteItems}
      />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away 🧳</h1>;
}
function Form({ items, onAddItems, onDeleteItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your😄 trip?</h3>
      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        value={description}
        placeholder='Item...'
        onChange={(e) => {
          e.preventDefault();
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className='stats'>
      <em> You have X items in your list, and you already packed X (X%)</em>
    </footer>
  );
}

export default App;
