import { useState } from "react";
import { useUsername } from '../../context/userContext';
import './Chat.css';

function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const { username } = useUsername();

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (message === "") {
      setError("Message cannot be empty");
    } else {
      setMessages([...messages, { text: message, user: username }]);
      setMessage("");
      setError("");
    }
  };

  return (
    <section className="globalContainer">
      <h2>Hello, {username}!</h2>
      <div id="messageContainer">
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <textarea
        id="textArea"
        placeholder="Ecris ton message ici ..."
        value={message}
        onChange={handleInputChange}
      />
      <button id="addButton" onClick={handleSubmit}>Envoyer le message</button>
      {error && <p id="error">{error}</p>}
    </section>
  );
}

export default Chat;
