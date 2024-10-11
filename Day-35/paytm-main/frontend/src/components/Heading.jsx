function Heading({ title, subtitle }) {
  return (
    <>
      <div className="text-3xl font-bold">{title}</div>
      <p className="mt-5 w-80 text-center text-lg text-gray-400">{subtitle}</p>
    </>
  );
}

export default Heading;
