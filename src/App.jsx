import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Signup from "./pages/connexion/Signup";
import Login from "./pages/connexion/Login";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Cookies from "js-cookie";
import Publish from "./pages/Offer/Publish";
function App() {
  const [token, setToken] = useState(Cookies.get("user-token") || null);

  const [titleFilter, setTitleFilter] = useState(""); // ce state me permet de stocker la valeur de ce que j'ecris dans la barre de recherche à chaque caractère que
  //j'ecris et je le declare ici dans app afin de pouvoir l'utiliser dans le header pour lui attribuer une valeur
  //et de pouvoir le transmettre dans la home page afin d'utiliser le contenu du state pour filtrer l'affichage des offres selon le titre
  const [priceMin, setPriceMin] = useState(Number);
  const [priceMax, setPriceMax] = useState(10000);
  const [priceDescAsc, setPriceDescAsc] = useState("price-asc");
  //ici meme principe mais pour un filtre de prix minimum max etc
  const handleConnectedOrNot = (token) => {
    if (token === null) {
      Cookies.remove("user-token");
    } else {
      Cookies.set("user-token", token, { expires: 14 });
    }
    setToken(token);
  };
  console.log(titleFilter);
  return (
    <Router>
      <Header
        setTitleFilter={setTitleFilter}
        titleFilter={titleFilter}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        token={token}
        handleConnectedOrNot={handleConnectedOrNot}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        priceDescAsc={priceDescAsc}
        setPriceDescAsc={setPriceDescAsc}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              titleFilter={titleFilter}
              priceMin={priceMin}
              priceMax={priceMax}
              priceDescAsc={priceDescAsc}
            />
          }
        />
        <Route path="/Offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup handleConnectedOrNot={handleConnectedOrNot} />}
        />
        <Route
          path="/login"
          element={<Login handleConnectedOrNot={handleConnectedOrNot} />}
        ></Route>
        <Route path="/publish" element={<Publish token={token} />}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
