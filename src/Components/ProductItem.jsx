// import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/cartSlice';


const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>
      <div className="flex justify-between items-center mt-4">
        <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">Details</Link>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
