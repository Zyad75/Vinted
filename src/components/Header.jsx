import { Link } from "react-router-dom";
import logo from "../assets/vinted9809.jpg";
import Cookies from "js-cookie";

const Header = () => {
  const token = Cookies.get("user-token");
  console.log(token);

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
            <Link to={"/Signup"}>
              <button>S'inscrire</button>
            </Link>
            <Link to={"/Login"}>
              <button>Se connecter</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="buttonsSignLog">
              <button
                onClick={() => {
                  Cookies.remove("user-token");
                  return <Link to={"/"} />;
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
