import { Link } from "react-router-dom";

export const Footer = () => {
    return (
      <>
        <div className="line">
          <div className="line-footer"></div>
          <div className="icon">
            <Link to="https://github.com/horrorbringer">
              <i className="fa-brands fa-github"></i>
            </Link>
            <i className="fa-brands fa-docker"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </>
    );
}