const Modal = ({ message, show, onClose }) => {
  if (!show) return null;
  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-lg'>
      <div className='bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-lg'>
        <h2 className='text-2xl font-bold text-white mb-4'>Notification</h2>
        <p className='text-gray-300 mb-6 text-lg'>{message}</p>
        <button
          className='w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
