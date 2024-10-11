function Navigation() {
  return (
    <nav className="flex h-20 items-center justify-between bg-indigo-950 px-8 shadow-sm shadow-black">
      <p className="text-xl font-bold">Payment App</p>
      <div className="flex items-center justify-center space-x-3">
        <p>Hello, User</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-lg">
          U
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
