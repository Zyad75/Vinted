import "./Home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//On va vouloir chercher de la data donc on va utiliser axios pour faire une requete au backend de vinted pour obtenir la data de toutes les offres
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
      );
      console.log(response.data);

      setIsLoading(false);
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <div>
        <img
          src="https://lereacteur-vinted.netlify.app/assets/tear-cb30a259.svg"
          alt="Image de fond principal"
          className="imgFond"
        />
      </div>

      {isLoading ? (
        <p>En cours de chargement</p>
      ) : (
        data.offers.map((elem, index) => {
          return (
            <>
              <Link to="/Offer">
                <div className="anOffer">
                  <div className="avatarAndUser">
                    <p>{elem.owner.account.username}</p>
                    <img
                      src={elem.owner.account.avatar.secure_url}
                      alt=""
                      className="avatarOffer"
                    />
                  </div>
                  <img
                    key={index}
                    src={elem.product_image.secure_url}
                    alt="img article"
                    className="imgOffer"
                  />
                </div>
              </Link>
            </>
          );
        })
      )}
    </main>
  );
};
export default Home;
