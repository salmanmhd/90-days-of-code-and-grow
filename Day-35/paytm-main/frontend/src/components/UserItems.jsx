import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function UserItems({ user }) {
  const navigate = useNavigate();
  const name = `${user.firstName} ${user.lastName}`;
  return (
    <div className="flex items-center justify-between border-b border-gray-500 py-4 last:border-none">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-lg">
          {user.firstName[0].toUpperCase()}
        </div>
        <p>
          {user.firstName} {user.lastName}{" "}
          <span className="text-gray-500">{user.username}</span>
        </p>
      </div>
      <div className="w-36">
        <NavLink
          to={`/send?userId=${user._id}&name=${name}`}
          className="me-2 w-full rounded-lg border border-white bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
        >
          Send Money
        </NavLink>
      </div>
    </div>
  );
}

export default UserItems;
