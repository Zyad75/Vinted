import { Link } from "react-router-dom";
import logo from "../assets/vinted9809.jpg";
import { useNavigate } from "react-router-dom";

const Header = ({
  token,
  handleConnectedOrNot,
  titleFilter,
  setTitleFilter,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,

  setPriceDescAsc,
}) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="headerContains">
        <div className="logoSearchBar">
          <Link to={"/"}>
            <img src={logo} alt="Vinted" />
          </Link>

          <div className="searchAndPrice">
            {/* ici je souhaite filtrer les offres 
            dabord en fonction de ce que j'ecris dans la barre de recherche (titre d'offre)
            pour cela je vais devoir faire une requete au serveur avec un get pour obtenir la data contenant les offres filtrés par titre donc ma requete contiendra un query */}
            <input
              type="text"
              value={titleFilter}
              placeholder="Recherche des articles"
              className="searchBar"
              onChange={(event) => {
                setTitleFilter(event.target.value);
              }}
            />
            <div className="priceSelect">
              <p>
                Trier par prix :
                <button
                  className="priceButton"
                  onClick={() => {
                    setPriceDescAsc("price-asc");
                  }}
                >
                  croissant
                </button>
                <button
                  className="priceButton"
                  onClick={() => {
                    setPriceDescAsc("price-desc");
                  }}
                >
                  décroissant
                </button>
              </p>
              <p>
                {" "}
                Prix entre :
                <input
                  type="number"
                  value={priceMin}
                  className="priceAscDescInp"
                  onChange={(event) => {
                    setPriceMin(event.target.value);
                  }}
                />{" "}
                et{" "}
                <input
                  type="number"
                  value={priceMax}
                  className="priceAscDescInp"
                  onChange={(event) => {
                    setPriceMax(event.target.value);
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        {!token ? (
          <div className="buttonsSignLog">
            <Link to={"/signup"}>
              <button className="connectButtons">S'inscrire</button>
            </Link>
            <Link to={"/login"}>
              <button className="connectButtons">Se connecter</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="buttonsSignLog">
              <button
                className="logoutButton"
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
        <Link to={"/publish"}>
          <button className="publishButton">Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
