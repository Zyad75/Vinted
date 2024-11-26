import "./Home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//On va vouloir chercher de la data donc on va utiliser axios pour faire une requete au backend de vinted pour obtenir la data de toutes les offres
import axios from "axios";
const Home = ({ titleFilter }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  try {
    useEffect(() => {
      const fetchData = async () => {
        if (!titleFilter) {
          const response = await axios.get(
            "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
          );
          // console.log(response.data);

          setIsLoading(false);
          setData(response.data);
        } else {
          const response = await axios.get(
            `https://lereacteur-vinted-api.herokuapp.com/v2/offers?title=${titleFilter}`
          );
          console.log(response.data);

          setIsLoading(false);
          setData(response.data);
        }
      };
      fetchData();
    }, [titleFilter]);
  } catch (error) {
    console.log(error);
  }

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
        <div className="allOffers">
          {data.offers.map((elem, index) => {
            // console.log(elem.owner.account.avatar);
            return (
              <>
                <Link className="link" to={`/Offer/${elem._id}`}>
                  <div className="anOffer">
                    <div className="avatarAndUser">
                      {elem.owner.account.avatar && (
                        <img
                          src={elem.owner.account.avatar.secure_url}
                          alt=""
                          className="avatarOffer"
                        />
                      )}
                      <p className="user">{elem.owner.account.username}</p>
                    </div>
                    <img
                      key={index}
                      src={elem.product_image.secure_url}
                      alt="img article"
                      className="imgOffer"
                    />
                    <div>
                      <p className="priceOffer">{elem.product_price} €</p>

                      {elem.product_details.map((detail) => {
                        return (
                          <>
                            {detail.TAILLE ? (
                              <>
                                <p className="infosOffer">{detail.TAILLE}</p>
                                <p className="infosOffer">{detail.MARQUE}</p>
                              </>
                            ) : (
                              <p className="infosOffer">{detail.MARQUE}</p>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      )}
    </main>
  );
};
export default Home;
