import { Link } from "react-router-dom";

function AdventureCard(props) {
  const { name, rating, price, id, image } = props.adventure;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="Adventure">
      <Link to={`/adventures/${id}`}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p>{rating} Stars</p>
        <p>${Number(price)}</p>
      </Link>
      <button onClick={() => handleAddToCart(props.adventure)}>
        Add to Cart
      </button>
    </div>
  );
}

export default AdventureCard;
