import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Login = ({ handleConnectedOrNot }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        { email, password }
      );
      handleConnectedOrNot(response.data.token);
      console.log("ici =>", response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "User not found") {
        setErrorMessage("email non répertorié/");
      } else if (error.response.status === 401) {
        setErrorMessage(
          "Vous n'êtes pas autorisé a vous connecter, veuillez verifier votre email/mot de passe"
        );
      } else {
        setErrorMessage(
          "une erreur est survenue veuillez réessayer ulterieurement"
        );
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
          marginTop: "200px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
          onSubmit={handleLogin}
        >
          <h1>Se connecter</h1>
          <input
            className="inputSignupLogin"
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            className="inputSignupLogin"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            className="submitButton"
            type="submit"
            value={"Se connecter"}
          />
        </form>
        <Link
          style={{ textDecoration: "none", color: "#2DB0BA" }}
          to={"/signup"}
        >
          {" "}
          Pas encore de compte ? Inscris-toi !
        </Link>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </>
  );
};
export default Login;
