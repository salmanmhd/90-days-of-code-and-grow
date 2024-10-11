function Input({ label, placeholderText, onChange }) {
  return (
    <div className="my-3">
      <label htmlFor="first name" className="font-semibold">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholderText}
        onChange={onChange}
        className="mt-2 h-9 w-full rounded-md bg-gray-200 p-3 text-gray-900 placeholder-gray-400"
      />
    </div>
  );
}

export default Input;
