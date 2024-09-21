export function Stats({ items }) {
  if (items.length === 0)
    return <p className='stats'>Start adding items for you next trip🛫</p>;

  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / items.length) * 100);
  console.log(percentage);
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You are good to go🥳'
          : `You have ${items.length} items in your list, and you already packed
        ${packed} (${percentage}%)`}
      </em>
    </footer>
  );
}
