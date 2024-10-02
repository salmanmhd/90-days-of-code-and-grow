import { useLoaderData } from 'react-router';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  return (
    <div>
      <h1>Menu</h1>;
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
