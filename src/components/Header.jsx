import { Link } from "react-router-dom";
import logo from "../assets/vinted9809.jpg";
import { useNavigate } from "react-router-dom";

const Header = ({ token, handleConnectedOrNot }) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="headerContains">
        <div className="logoSearchBar">
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
        {!token ? (
          <div className="buttonsSignLog">
            <Link to={"/signup"}>
              <button>S'inscrire</button>
            </Link>
            <Link to={"/login"}>
              <button>Se connecter</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="buttonsSignLog">
              <button
                onClick={() => {
                  handleConnectedOrNot(null);
                  //permet de faire :
                  // Cookies.remove("user-token");
                  //setToken(null);
                  navigate("/");
                }}
              >
                {" "}
                se Deconnecter{" "}
              </button>
            </div>
          </>
        )}

        <button>Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
