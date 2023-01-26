import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function EditAdventure() {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [adventure, setAdventure] = useState({
    name: "",
    description: "",
    price: "",
    rating: 0,
    adrenaline_approved: true,
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/adventures/${id}`)
      .then((response) => setAdventure(response.data))
      .catch((error) => console.log(error));
  }, [API, id]);

  const handleTextChange = (event) => {
    setAdventure({ ...adventure, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setAdventure({
      ...adventure,
      adrenaline_approved: !adventure.adrenaline_approved,
    });
  };

  const updatedAdventure = (adventure) => {
    axios
      .put(`${API}/adventures/${id}`, adventure)
      .then(() => {
        navigate("/adventures");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedAdventure(adventure);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={adventure.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Adventure"
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={adventure.description}
          type="text"
          onChange={handleTextChange}
          placeholder="Description of Adventure"
          required
        />

        <label htmlFor="image">Image:</label>
        <input
          name="image"
          id="image"
          value={adventure.image}
          type="text"
          onChange={handleTextChange}
          placeholder="Image of Adventure"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={adventure.price}
          type="number"
          onChange={handleTextChange}
          placeholder="Price of Adventure"
          required
        />

        <label htmlFor="rating">Rating:</label>
        <select
          name="rating"
          id="rating"
          value={adventure.rating}
          onChange={handleTextChange}
          required
        >
          <option value="" disabled>
            Select A Rating
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="adrenaline_approved">Adrenaline Approved:</label>
        <input
          id="adrenaline_approved"
          checked={adventure.adrenaline_approved}
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={`/adventures/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditAdventure;
