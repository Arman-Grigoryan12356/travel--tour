import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";

export default function MyJournal() {
  const { user, logout } = useContext(AuthContext);
  const [trips, setTrips] = useState([]);

  const deleteTrip = (index) => {
    setTrips(trips.filter((_, i) => i !== index));
  };

  return (
    <div className="page">
      <h2>{user?.username}'s Travel Journal</h2>
      <Link to="/add-trip" className="btn">
        Add Trip
      </Link>
      <button onClick={logout} className="btn danger">
        Logout
      </button>
      <ul>
        {trips.length === 0 && <p>No trips yet.</p>}
        {trips.map((trip, index) => (
          <li key={index}>
            {trip.destination} ({trip.date})
            <button onClick={() => deleteTrip(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
