export function Stats({ items }) {
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / items.length) * 100);
  return (
    <footer className='stats'>
      <em>
        {' '}
        You have {items.length} items in your list, and you already packed{' '}
        {packed} ({percentage}%)
      </em>
    </footer>
  );
}
