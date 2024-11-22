import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
const SignUp = () => {
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input type="text" placeholder="username" />
        <input type="email" placeholder="mail@mail.com" />
        <input type="password" placeholder="password" />
        <input type="checkbox" name={"S'inscrire à notre newsletter"} />
        <input type="submit" value={"S'inscrire"} />
      </form>
    </>
  );
};
export default SignUp;
