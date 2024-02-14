import React from 'react';

const PreOrder = () => {
  const preOrderItems = [
    {
      id: 1,
      name: 'Product A',
      description: 'Description of Product A',
      price: 19.99,
      image: 'url_to_image_product_a.jpg',
      // Add more properties as needed
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Description of Product B',
      price: 29.99,
      image: 'url_to_image_product_b.jpg',
      // Add more properties as needed
    },
    // Add more items as needed
  ];

  return (
    <div>
      <h1>Pre-Order Items</h1>
      <div className="preorder-items">
        {preOrderItems.map((item) => (
          <div key={item.id} className="preorder-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: GHS {item.price}</p>
            {/* Add buttons for pre-order or other actions */}
            <button>Pre-Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreOrder;
