import React from 'react';
import { useData } from '../context/DataContext';

export default function Services() {
  const { products } = useData();

  return (
    <div>
      <h2>Services Page</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
