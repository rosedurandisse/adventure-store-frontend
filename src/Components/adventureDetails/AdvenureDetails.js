import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AdventureDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [adventure, setAdventure] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/adventures/${id}`)
      .then((response) => setAdventure(response.data))
      .catch((error) => console.log(error));
  }, [API, id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/adventures/${id}`)
      .then(() => navigate("/adventures"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="Adventures">
      <h1>{adventure.name}</h1>
      <div>
        <img src={adventure.image} alt={adventure.name} />
      </div>
      <p>
        <b>What you'll be doing: </b>
        {adventure.description}
      </p>
      <p>
        {" "}
        <b>Rating:</b> {adventure.rating}
      </p>
      <Link to="/adventures">
        <button>Back</button>
      </Link>
      <Link to={`/adventures/${adventure.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default AdventureDetails;
