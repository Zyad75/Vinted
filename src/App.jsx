import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Signup from "./pages/connexion/Signup";
import Login from "./pages/connexion/Login";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Cookies from "js-cookie";
function App() {
  const [token, setToken] = useState(Cookies.get("user-token") || null);

  const handleConnectedOrNot = (token) => {
    if (token === null) {
      Cookies.remove("user-token");
    } else {
      Cookies.set("user-token", token, { expires: 14 });
    }
    setToken(token);
  };

  return (
    <Router>
      <Header token={token} handleConnectedOrNot={handleConnectedOrNot} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup />}
          handleConnectedOrNot={handleConnectedOrNot}
        />
        <Route
          path="/login"
          element={<Login />}
          handleConnectedOrNot={handleConnectedOrNot}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
