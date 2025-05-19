import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch product');
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="p-6 text-center text-indigo-600 font-semibold animate-pulse">
        Loading product details...
      </div>
    );

  if (error)
    return <p className="p-6 text-center text-red-500 font-medium">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full md:w-1/2 h-72 object-cover rounded-md border"
        />

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <div className="text-xl text-green-600 font-semibold">${product.price}</div>
          <div className="text-sm text-gray-500">Brand: {product.brand}</div>
          <div className="text-sm text-gray-500">Category: {product.category}</div>

          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
