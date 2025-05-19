import { useState } from 'react';
import ProductItem from './ProductItem';
import useFetchProducts from '../utils/useFetchProduct';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [search, setSearch] = useState('');

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition"
      />

      {/* Loading/Error States */}
      {loading && (
        <p className="text-center text-indigo-500 text-lg animate-pulse">
          Loading products...
        </p>
      )}
      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      {/* Product Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {/* No Results Message */}
      {!loading && filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found matching "<span className="font-semibold">{search}</span>"
        </p>
      )}
    </div>
  );
};

export default ProductList;
