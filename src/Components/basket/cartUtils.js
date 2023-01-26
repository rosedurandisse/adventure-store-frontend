// export function handleAddToCart(product) {
//   const itemExistsInCart = cartItems.find((item) => item.id === product.id);
//   if (itemExistsInCart) {
//     setCartItems(
//       cartItems.map((eachItem) =>
//         eachItem.id === product.id
//           ? { ...itemExistsInCart, quantity: itemExistsInCart.quantity + 1 }
//           : eachItem
//       )
//     );
//   } else {
//     setCartItems([...cartItems, { ...product, quantity: 1 }]);
//   }
// }

// export function handleRemove(product) {
//   const itemExistsInCart = cartItems.find((item) => item.id === product.id);

//   if (itemExistsInCart.quantity === 1) {
//     setCartItems(cartItems.filter((eachItem) => eachItem.id !== product.id));
//   } else {
//     setCartItems(
//       cartItems.map((eachItem) =>
//         eachItem.id === product.id
//           ? { ...itemExistsInCart, quantity: itemExistsInCart.quantity - 1 }
//           : eachItem
//       )
//     );
//   }
// }

// export function clearItems() {
//   setCartItems([]);
// }
