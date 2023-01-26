import React from "react";

function Basket({ cartItems, handleAddToCart, handleRemove, clearItems }) {
  // const { cartItems, handleAddToCart, handleRemove, clearItems } = props;
  const PriceOfEachAdventure = (quantity, price) => {
    return quantity * price;
  };

  const itemsPrice = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.quantity * currentValue.price,
    0
  );
  const taxes = itemsPrice * 0.14;
  const total = taxes + itemsPrice;

  return (
    <section className="cart">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <section>
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Item Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((eachItem) => {
                return (
                  <tr key={eachItem.id}>
                    <td>{eachItem.name}</td>
                    <td>
                      {" "}
                      <button onClick={() => handleRemove(eachItem)}>-</button>
                      {eachItem.quantity}
                      <button onClick={() => handleAddToCart(eachItem)}>
                        +
                      </button>
                    </td>
                    <td> ${eachItem.price}</td>
                    <td>
                      ${PriceOfEachAdventure(eachItem.quantity, eachItem.price)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div>
            <div>Subtotal:${itemsPrice}</div>
            <div>Taxes:${taxes.toFixed(2)}</div>
            <div>Total:${total.toFixed(2)}</div>
          </div>
          <button onClick={() => clearItems()}>
            Forget it. I can venture to bed. It's included with the rent
          </button>
          <button onClick={() => alert("You got money!")}>
            Complete Purchase
          </button>
        </section>
      )}
    </section>
  );
}

export default Basket;
