import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import "./App.css";


const ProductList = lazy(() => import('./Components/ProductList'));
const ProductDetail = lazy(() => import('./Components/ProductDetails'));
const Cart = lazy(() => import('./Components/Cart'));

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
      <Router>
        <Header />
        <main className="container mx-auto px-4 py-6">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-60 animate-pulse">
                <div className="text-lg font-semibold text-indigo-600">
                  🔄 Loading ShoppyGlobe...
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </div>
  );
}

export default App;
