import { publicTrips } from "./tripsData";
import "./style.css";

export default function Explore() {
  return (
    <div className="container">
      <h2>Explore Trips</h2>
      {publicTrips.map((trip, i) => (
        <div key={i} className="trip-card">
          <h3>{trip.title}</h3>
          <p>
            {trip.location} - {trip.date}
          </p>
          <p>{trip.description}</p>
        </div>
      ))}
    </div>
  );
}
