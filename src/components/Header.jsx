const Header = () => {
  return (
    <header>
      <div className="headerContains">
        <div className="logoSearchBar">
          <img src="" alt="Vinted" />
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
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;