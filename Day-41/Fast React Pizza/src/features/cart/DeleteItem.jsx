import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
