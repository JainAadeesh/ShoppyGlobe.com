import { useDispatch } from 'react-redux';
import { removeFromCart } from '../utils/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between gap-4 border-b border-gray-200 py-4 px-2 md:px-4 hover:bg-gray-50 transition">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover rounded-md shadow"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
          <p className="text-sm text-gray-600">${item.price}</p>
          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-md transition duration-200"
      >
        ❌ Remove
      </button>
    </div>
  );
};

export default CartItem;
