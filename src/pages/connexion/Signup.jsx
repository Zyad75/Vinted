import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = ({ handleConnectedOrNot }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username, email, password, newsletter }
      );
      handleConnectedOrNot(response.data.token);
      console.log("ici =>", response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.status === 409) {
        setErrorMessage("adresse déja utilisée");
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez renseigner toutes vos informations");
      } else {
        setErrorMessage("Erreur, veuillez réessayer svp !");
      }
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSignup}
        >
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="mail@mail.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="newsletter">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            />
            <p>Newsletter</p>
          </div>
          <input type="submit" value={"S'inscrire"} />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
        <Link to={"/login"}> Déjà inscris ? Connecte-toi!</Link>
      </div>
    </>
  );
};
export default Signup;
