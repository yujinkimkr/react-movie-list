import "../style.scss";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar-list">
      <Link to="/">
        <div className="logo">BoBlex</div>
      </Link>
      <ul className="menu-list">
        <Link to="/onscreen"><li>On screen</li></Link>
        <Link to="/popular"><li>Popular</li></Link>
        <Link to="/top"><li>Top</li></Link>
        <Link to="/upcoming"><li>Upcoming</li></Link>
      </ul>


    </div>
  )
}

export default Navbar;
