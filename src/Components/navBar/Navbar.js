import { Link } from "react-router-dom";
import "./navBar.scss";

function NavBar(props) {
  const { countCartItems } = props;
  return (
    <nav className="nav">
      <div className="nav__allAdventures">
        <Link to="/adventures">All Activities</Link>
      </div>

      <div className="nav__addAdventure">
        <Link to="/new">Add an Adventure</Link>
      </div>

      <div className="nav__cart">
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
    </nav>
  );
}

export default NavBar;
