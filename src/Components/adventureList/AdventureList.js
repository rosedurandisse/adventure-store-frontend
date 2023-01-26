import axios from "axios";
import { useState, useEffect } from "react";
import Adventure from "../adventureCard/AdventureCard";

function AdventureList(props) {
  const { handleAddToCart, searchTerm } = props.props;

  const API = process.env.REACT_APP_API_URL;

  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/adventures`)
      .then((response) => setAdventures(response.data))
      .catch((error) => console.log(error));
  }, [API]);


  //filter functionality
  let filteredAdventures = adventures;

  if (searchTerm) {
    filteredAdventures = adventures.filter((adventure) => {
      const adventureLowerCased = adventure.name.toLowerCase();
      const searchTermLowerCased = searchTerm.toLowerCase();
      return adventureLowerCased.includes(searchTermLowerCased);
    });
  }

  return (
    <div>
      <section className="Adventures col-2">
        {filteredAdventures.map((adventure) => {
          return (
            <Adventure
              key={adventure.id}
              adventure={adventure}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </section>
    </div>
  );
}
export default AdventureList;
