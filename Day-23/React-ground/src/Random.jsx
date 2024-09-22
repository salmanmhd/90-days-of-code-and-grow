import { useState } from 'react';
// import Modal from './Modal';
function Random() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Class:', e.target.className);
    console.log('Handler Attached to:', e.currentTarget.className);
  }

  return (
    <div className='container' onClick={handleClick}>
      {/* <Modal /> */}
      <ProductList />
    </div>
  );
}

function ProductList() {
  const products = ['Product A', 'Product B', 'Product C'];

  const productListStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#f8f9fa',
  };

  const productStyle = {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  const productHoverStyle = {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    transform: 'scale(1.1)',
  };

  function handleProductClick(e) {
    const product = e.target.getAttribute('data-product');
    if (product) {
      console.log(`Showing details for ${product}`);
    }
  }

  return (
    <div
      className='product-list'
      style={productListStyle}
      onClick={handleProductClick}
    >
      {products.map((product, index) => (
        <div
          key={index}
          className='product'
          data-product={product}
          style={productStyle}
          onMouseOver={(e) => (e.currentTarget.style = productHoverStyle)}
          onMouseOut={(e) => (e.currentTarget.style = productStyle)}
        >
          {product}
        </div>
      ))}
    </div>
  );
}
function CommentSection() {
  const [comments, setComments] = useState(['Nice post!', 'Great read!']);

  function handleCommentClick(e) {
    const comment = e.target.getAttribute('data-comment');
    if (comment) {
      console.log(`You clicked on: ${comment}`);
    }
  }

  return (
    <div className='comments' onClick={handleCommentClick}>
      {comments.map((comment, index) => (
        <p key={index} data-comment={comment}>
          {comment}
        </p>
      ))}
    </div>
  );
}

function Menu() {
  const [selectedItem, setSelectedItem] = useState('');

  function handleMenuClick(e) {
    const clickedItem = e.target.getAttribute('data-item');
    if (clickedItem) {
      setSelectedItem(clickedItem);
    }
  }

  return (
    <div className='menu' onClick={handleMenuClick}>
      <button data-item='Home' className='menu-item'>
        Home
      </button>
      <button data-item='About' className='menu-item'>
        About
      </button>
      <button data-item='Contact' className='menu-item'>
        Contact
      </button>
      <div>Selected Menu Item: {selectedItem}</div>
    </div>
  );
}

function PositiveExample() {
  function handleContainerClick(e) {
    console.log('Container Clicked: ', e.target.className);
  }

  function handleOuterClick(e) {
    console.log('Outer Clicked: ', e.target.className);
  }

  function handleInnerClick(e) {
    console.log('Inner Clicked: ', e.target.className);
  }

  return (
    <div className='container' onClick={handleContainerClick}>
      Container
      <div className='outer' onClick={handleOuterClick}>
        Outer
        <div className='inner' onClick={handleInnerClick}>
          Inner
        </div>
      </div>
    </div>
  );
}

// export default PositiveExample;

export default Random;
