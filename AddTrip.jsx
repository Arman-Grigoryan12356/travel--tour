import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTrip() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    alert(`Trip added: ${destination}`);
    navigate("/my-journal");
  };

  return (
    <div className="page">
      <h2>Add New Trip</h2>
      <input
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleAdd}>Add Trip</button>
    </div>
  );
}
