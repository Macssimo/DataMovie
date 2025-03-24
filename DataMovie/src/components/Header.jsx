import { Link } from "react-router-dom";
import { FaFilm, FaSearch, FaMoon, FaSun } from "react-icons/fa";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header>
      <nav>
        <Link to="/">
          <FaFilm /> DataMovie
        </Link>
        <div>
          <button onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
