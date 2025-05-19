import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <header className="flex items-center justify-between bg-indigo-600 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition duration-300"
      >
        🛍️ ShoppyGlobe
      </Link>

      <Link
        to="/cart"
        className="relative text-lg font-medium hover:text-yellow-300 transition duration-300"
      >
        🛒 Cart
        <span className="ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-600 bg-yellow-300 rounded-full animate-bounce">
          {cartCount}
        </span>
      </Link>
    </header>
  );
};

export default Header;
