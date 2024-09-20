import { Item } from './Item';

export function PackingList({ items, onDeleteItems, onCheck }) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onCheck={onCheck}
          />
        ))}
      </ul>
    </div>
  );
}
