import { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleBackdropClick(e) {
    closeModal();
  }

  // Styles
  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark translucent backdrop
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    width: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const closeButtonStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const openButtonStyle = {
    backgroundColor: '#0cba74',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '18px',
  };

  const modalTitleStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  return (
    <div>
      <button style={openButtonStyle} onClick={openModal}>
        Open Modal
      </button>

      {isOpen && (
        <div
          className='backdrop'
          style={backdropStyle}
          onClick={handleBackdropClick}
        >
          <div
            className='modal-content'
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={modalTitleStyle}>Modal Title</h2>
            <p>This is a modal. Click outside to close it.</p>
            <button style={closeButtonStyle} onClick={closeModal}>
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
