import Button from "../components/Button";

function UserItems({ user = "Username" }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-500 py-4 last:border-none">
      <div className="flex items-center justify-center space-x-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-lg">
          U
        </div>
        <p>{user}</p>
      </div>
      <Button text={"Send Money"} />
    </div>
  );
}

export default UserItems;
