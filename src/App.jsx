import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import SignUp from "./pages/connexion/Signup";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offer/:id" element={<Offer />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
