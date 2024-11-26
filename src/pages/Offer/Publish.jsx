import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Publish = ({ token }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handlePublish = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("ici =>", response.data);
      if (response.data._id) {
        navigate(`/Offer/${response.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      {!token ? (
        <Navigate to={"/login"} />
      ) : (
        <form
          style={{
            margin: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            marginInline: "200px",
          }}
          onSubmit={handlePublish}
        >
          <h2>Vends ton article</h2>
          <div>
            <input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Titre :</p>
            <input
              style={{
                border: "none",
                borderBottom: "solid 2px lightgray",
                width: "600px",
              }}
              placeholder="ex : Chaussettes"
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Description :</p>
            <input
              style={{
                border: "none",
                borderBottom: "solid 2px lightgray",
                width: "600px",
                height: "150px",
              }}
              type="text"
              placeholder="ex : porté qq fois, abimé"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Marque :</p>
            <input
              style={{
                border: "none",
                borderBottom: "solid 2px lightgray",
                width: "600px",
              }}
              type="text"
              value={brand}
              placeholder="ex : Puma, Nike..."
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Taille :</p>
            <input
              style={{
                border: "none",
                borderBottom: "solid 2px lightgray",
                width: "600px",
              }}
              type="text"
              value={size}
              placeholder="ex : M, S, XL, 44/48...."
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Couleur :</p>
            <input
              style={{
                border: "none",
                borderBottom: "solid 2px lightgray",
                width: "600px",
              }}
              type="text"
              placeholder="ex : Rouge"
              value={color}
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Etat :</p>
            <input
              style={{
                border: "none",
                borderBottom: "solid 2px lightgray",
                width: "600px",
              }}
              type="text"
              placeholder="ex : Neuf avec etiquette"
              value={condition}
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Lieu :</p>
            <input
              style={{
                border: "none",
                borderBottom: "solid 2px lightgray",
                width: "600px",
              }}
              type="text"
              placeholder="ex : Paris"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Prix :</p>
            <input
              style={{
                border: "none",
                borderBottom: "solid 2px lightgray",
                width: "600px",
              }}
              type="text"
              value={price}
              placeholder="ex : 10,50 €"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <input
            className="submitButton"
            style={{ width: "fit-content" }}
            type="submit"
            value={"Ajouter"}
          />
        </form>
      )}
    </>
  );
};
export default Publish;
