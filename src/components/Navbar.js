import { Link } from "react-router-dom";
import "./home.css";
const Navbar = (props) => {
  return (
    <div>
      <nav className="nav">
        <div className="left-div">
      
        </div>
        <div className="middle-div">
          <span>Welcome to Favorite Npm Packages</span>
        </div>
      
        <div className="nav-links">
        
        <br></br>
          <ul>
            {/* <li className="create-review">
              <Link to="/addFavourite">
                <span className="link">Add Packages</span>
              </Link>
            </li> */}
            <li type="none" className="home">
              <Link to="/addFavourite">
                <button className="link">Home</button>
              </Link>
            </li>
            <br></br>
            <li type="none" className="home">
              <Link to="/">
                <button className="link">Package List</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
