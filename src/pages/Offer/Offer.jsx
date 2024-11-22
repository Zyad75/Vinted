import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Offer.css";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  try {
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        console.log(response.data);

        setIsLoading(false);
        setData(response.data);
      };
      fetchData();
    }, [id]);
  } catch (error) {
    console.log(error.response.data);
  }

  return (
    <>
      {isLoading ? (
        <p>En cours de chargement...</p>
      ) : (
        <main>
          {" "}
          <div className="divOffeR">
            <div className="divImG">
              <img
                src={data.product_image.secure_url}
                alt="Offer Image"
                className="imgOffeR"
              />
            </div>
            <div className="offerDesc">
              <p className="price">{data.product_price} €</p>
              <div className="detailS">
                <div>
                  <p className="categoryName">MARQUE</p>

                  {data.product_details.map((detail) => {
                    return (
                      <>
                        {detail.TAILLE && (
                          <p className="categoryName">TAILLE</p>
                        )}
                      </>
                    );
                  })}

                  <p className="categoryName">ÉTAT</p>
                  <p className="categoryName">COULEUR</p>
                  <p className="categoryName">EMPLACEMENT</p>
                </div>
                <div>
                  {data.product_details.map((detail) => {
                    return (
                      <>
                        <p>{detail.MARQUE}</p>
                        {detail.TAILLE && <p>{detail.TAILLE}</p>}
                        <p>{detail.ÉTAT}</p>
                        <p>{detail.COULEUR}</p>
                        <p>{detail.EMPLACEMENT}</p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};
export default Offer;
