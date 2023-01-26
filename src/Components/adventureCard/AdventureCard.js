import { Link } from "react-router-dom";
import "./AdventureCard.scss";

function AdventureCard(props) {
  const { name, rating, price, id, image } = props.adventure;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="adventureCard">
      <Link to={`/adventures/${id}`}>
        <div className="adventureCard__image">
          <img src={image} alt={name} />
        </div>
        <div className="adventureCard__details">
          <h1>{name}</h1>
          <p>{rating} Stars</p>
          <p>${Number(price)}</p>
        </div>
      </Link>
      <button onClick={() => handleAddToCart(props.adventure)}>
        Add to Cart
      </button>
    </div>
  );
}

export default AdventureCard;
