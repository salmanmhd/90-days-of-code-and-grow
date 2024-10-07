function Playground() {
  return (
    <div>
      <nav className="h-18 flex items-center justify-between bg-slate-900 p-4 px-20">
        <div className="w-20 rounded-2xl border border-emerald-200 text-center text-2xl font-extrabold text-emerald-100">
          Logo
        </div>
        <div className="flex space-x-8">
          <div className="h-7 w-20 rounded-sm bg-blue-500 text-center text-white">
            Box 1
          </div>
          <div className="h-7 w-20 rounded-sm bg-emerald-700 text-center text-white">
            Box 2
          </div>
          <div className="h-7 w-20 rounded-sm bg-yellow-500 text-center text-black">
            Box 3
          </div>
          <div className="h-7 w-20 rounded-sm bg-purple-500 text-center text-white">
            Box 4
          </div>
        </div>
      </nav>
      <div className="flex h-[90dvh] flex-col items-center justify-center bg-gradient-to-br from-emerald-900 to-indigo-950 text-emerald-200">
        <p className="mb-2 text-4xl font-bold text-white">You can do bro🔥</p>
        <p className="mb-7 text-4xl font-bold text-white">It's your time now</p>
        <p className="m-1 font-light text-white">
          go and make some noise buddy, this is going to be amazing this time
        </p>
        <p className="mb-10 font-light text-white">
          You have changed yourself, now you are gaining some experiences
        </p>
        <button className="h-10 w-32 rounded-md bg-gradient-to-tl from-orange-700 to-yellow-400 text-xl font-bold text-emerald-100">
          Start
        </button>
      </div>
    </div>
  );
}

export default Playground;
