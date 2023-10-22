import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import { NavLink, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound.jsx';
import Cart from './Components/Cart/Cart.jsx';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

export const SearchContext = React.createContext('No Provider Here');

function App() {
  const cart = useSelector((state) => state.cart.pizzas);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cart);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [cart]);

  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="windowApp">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="App">
          <Header />
          <NavLink to="/cart">
            <Toaster />
          </NavLink>
          <div className="AppContent">
            <Routes>
              <Route path="" element={<Main />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
