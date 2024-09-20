import { useState } from 'react';
import './index.css';
import { PackingList } from './PackingList';
import { Stats } from './Stats';
import { Form } from './Form';
import { Logo } from './Logo';
const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
];
function App() {
  const [items, setItems] = useState(initialItems);

  function addItems(obj) {
    setItems((items) => [...items, obj]);
  }

  function handleCheck(id) {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(items);
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
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheck={handleCheck}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
