import { Link } from "react-router-dom";
import "./navBar.scss";

function NavBar(props) {
  const { countCartItems, searchTerm, setSearchTerm } = props;
  return (
    <nav>
      <div className="PageNavigation">
        <div>
          <Link to="/adventures">All Activities</Link>
        </div>
        <div>
          <Link to="/new">Add an Adventure</Link>
        </div>
        <div>
          <Link to="/cart">
            Cart
            {countCartItems ? (
              <p>
                {" "}
                {countCartItems} Adventure{countCartItems > 1 && "s"}
              </p>
            ) : null}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
