import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.scss";

//Pages
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Cart from "./Pages/Cart";

//Nav Components
import NavBar from "./Components/navBar/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (product) => {
    const itemExistsInCart = cartItems.find((item) => item.id === product.id);
    if (itemExistsInCart) {
      setCartItems(
        cartItems.map((eachItem) =>
          eachItem.id === product.id
            ? { ...itemExistsInCart, quantity: itemExistsInCart.quantity + 1 }
            : eachItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (product) => {
    const itemExistsInCart = cartItems.find((item) => item.id === product.id);
    if (itemExistsInCart.quantity === 1) {
      setCartItems(cartItems.filter((eachItem) => eachItem.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((eachItem) =>
          eachItem.id === product.id
            ? { ...itemExistsInCart, quantity: itemExistsInCart.quantity - 1 }
            : eachItem
        )
      );
    }
  };

  const clearItems = () => {
    setCartItems([]);
  };

  return (
    <div className="app">
      <NavBar
        countCartItems={cartItems.length}
        // searchTerm={searchTerm}
        // setSearchTerm={setSearchTerm}
      />

      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/adventures"
            element={
              <Index
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                // searchTerm={searchTerm}
              />
            }
          ></Route>
          <Route path="/adventures/:id" element={<Show />}></Route>
          <Route path="/adventures/:id/edit" element={<Edit />}></Route>
          <Route path="/new" element={<New />}></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddToCart={handleAddToCart}
                handleRemove={handleRemove}
                clearItems={clearItems}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
