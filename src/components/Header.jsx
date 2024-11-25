import { Link } from "react-router-dom";
import logo from "../assets/vinted9809.jpg";
const Header = () => {
  return (
    <header>
      <div className="headerContains">
        <div
          className="logoSearchBar"
          onClick={() => {
            return (
              <>
                <Link to={"/"}>
                  <button></button>
                </Link>
              </>
            );
          }}
        >
          <img src={logo} alt="Vinted" />
          <div className="searchAndPrice">
            <input
              type="text"
              placeholder="Recherche des articles"
              className="searchBar"
            />
            <div className="priceSelect">
              <p>Trier par prix :</p>
              <p> Prix entre :</p>
            </div>
          </div>
        </div>
        <div className="buttonsSignLog">
          <Link to={"/Signup"}>
            <button>S'inscrire</button>
          </Link>
          <button>Se connecter</button>
        </div>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
