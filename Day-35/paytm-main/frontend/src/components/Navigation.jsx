import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <nav className="flex h-20 items-center justify-between bg-indigo-950 px-8 shadow-sm shadow-black">
      <p className="cursor-pointer text-3xl font-bold">Pay Ease</p>
      <div className="flex items-center justify-center space-x-4">
        <p className="text-xl font-semibold">Hello, User</p>
        <div
          onClick={handleLogout}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-green-700 text-lg"
        >
          U
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
