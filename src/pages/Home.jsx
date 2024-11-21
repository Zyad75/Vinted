import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main>
      <div>
        <img src="" alt="Image de fond principal" className="imgFond" />
      </div>

      <Link to="/Offer">vers l'offre</Link>
    </main>
  );
};
export default Home;
