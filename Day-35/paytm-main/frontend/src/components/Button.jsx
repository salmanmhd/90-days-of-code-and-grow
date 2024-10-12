function Button({ text, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="me-2 w-full rounded-lg border border-white bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300"
    >
      {text}
    </button>
  );
}

export default Button;
