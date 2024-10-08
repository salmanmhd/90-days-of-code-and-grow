function Ground() {
  return (
    <div className="h-60 bg-emerald-600 sm:grid sm:grid-cols-10">
      <div className="h-8 rounded-md border border-white bg-emerald-950 text-center text-white sm:col-span-4">
        Box 1
      </div>
      <div className="h-8 rounded-md border border-white bg-yellow-600 text-center text-white sm:col-span-4">
        Box 2
      </div>
      <div className="h-8 rounded-md border border-white bg-blue-800 text-center text-white sm:col-span-2">
        Box 3
      </div>
    </div>
  );
}

export default Ground;
