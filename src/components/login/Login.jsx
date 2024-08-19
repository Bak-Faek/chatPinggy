import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUsername } from '../../context/userContext';
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { addUsername } = useUsername(); 

  const handleUsername = (event) => {
    setUsername(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "") {
      setError("Le surnom ne peut pas être vide.");
    } else {
      setError("");
      addUsername(username); 
      console.log("Username submitted:", username);
      navigate('/chatbox');
    }
  };

  return (
    <div className="generalContainer">
      <section className="generalContainer">
        <h3>Veuillez entrer votre Surnom</h3>
        <div className="loginContainer">
          <label htmlFor="username">
            <input
              id="username"
              name="username"
              value={username}
              onChange={handleUsername}
              placeholder="Entrez votre surnom"
            />
          </label>
          <button onClick={handleSubmit}>Ajouter</button>
          {error && <p className="error">{error}</p>}{" "}
        </div>
      </section>
    </div>
  );
}
