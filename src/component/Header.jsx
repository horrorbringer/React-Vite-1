import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <ul style={{ display: "flex" }}>
        <li
          style={{ marginRight: "5rem", listStyle: "none", fontSize: "3rem" }}
        >
          <Link style={{ color: "white" }} to={"/"}>
            Home
          </Link>
        </li>
        <li
          style={{ marginRight: "5rem", listStyle: "none", fontSize: "3rem" }}
        >
          <Link style={{ color: "white" }} to={"/About"}>
            About
          </Link>
        </li>
        <li
          style={{ marginRight: "5rem", listStyle: "none", fontSize: "3rem" }}
        >
          <Link style={{ color: "white" }} to={"/Contact"}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
