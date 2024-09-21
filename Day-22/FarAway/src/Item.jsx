export function Item({ item, onDeleteItems, onCheck }) {
  return (
    <li>
      <input
        type='checkbox'
        checked={item.packed}
        onChange={() => onCheck(item.id)}
      />
      <span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
