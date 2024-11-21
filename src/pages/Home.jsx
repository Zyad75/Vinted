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

      <Link to="/Offer">vers l'offre</Link>
    </main>
  );
};
export default Home;
