import { Link } from "react-router-dom";
import '../App.css'
function Header() {
  return (
    <>
      <ul className="navbar">
        <li
          style={{listStyle: "none", fontSize: "3rem" }}
        >
          <Link style={{ color: "white" }} to={"/"}>
            Home
          </Link>
        </li>
        <li
          style={{listStyle: "none", fontSize: "3rem" }}
        >
          <Link style={{ color: "white" }} to={"/About"}>
            About
          </Link>
        </li>
        <li
          style={{listStyle: "none", fontSize: "3rem" }}
        >
          <Link style={{ color: "white" }} to={"/Contact"}>
            Contact
          </Link>
        </li>
        <li
          style={{listStyle: "none", fontSize: "3rem" }}
        >
          <Link style={{ color: "white" }} to={"/Login"}>
            Login
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
