import { useState } from "react";
import './Room.css'

export default function Room() {
  const [rooms, setRooms] = useState([]);

  const addRoom = () => {
    setRooms([...rooms, `Room ${rooms.length + 1}`]);
  };

  return (
    <div>
      <form className="roomContainer">
        <div id="roomDiv">General Room</div>

      </form>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>{room}</li>
        ))}
      </ul>
      <button id="roomButton" type="button" onClick={addRoom}>
          Add room
        </button>
    </div>
  );
}

