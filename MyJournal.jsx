import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
import "./style.css";

export default function MyJournal() {
  const { user, logout } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);

  const deleteTrip = (index) => {
    setTrips(trips.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>{user.username}'s Journal</h2>
      <Link to="/add-trip">Add Trip</Link> |{" "}
      <button onClick={logout}>Logout</button>
      {trips.length === 0 ? (
        <p>No trips yet.</p>
      ) : (
        trips.map((trip, i) => (
          <div key={i} className="trip-card">
            <h3>{trip.destination}</h3>
            <p>{trip.date}</p>
            <p>{trip.description}</p>
            <button onClick={() => deleteTrip(i)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
