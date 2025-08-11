import React from "react";
import "./style.css";

export default function Explore() {
  const trips = [
    {
      id: 1,
      title: "Paris, France",
      date: "June 2025",
      description: "The city of lights, romance, and world-famous landmarks.",
      image: "/images/paris.jpg",
    },
    {
      id: 2,
      title: "Tokyo, Japan",
      date: "May 2025",
      description: "A vibrant blend of tradition and futuristic technology.",
      image: "/images/tokyo.jpg",
    },
    {
      id: 3,
      title: "Bali, Indonesia",
      date: "April 2025",
      description: "Tropical beaches, lush forests, and spiritual temples.",
      image: "/images/bali.jpg",
    },
    {
      id: 4,
      title: "New York, USA",
      date: "March 2025",
      description: "The city that never sleeps, full of energy and culture.",
      image: "/images/newyork.jpg",
    },
  ];

  return (
    <div className="container">
      <h1>Explore Destinations</h1>
      <p>Discover amazing travel spots shared by our community.</p>

      <div className="gallery">
        {trips.map((trip) => (
          <div key={trip.id} className="card">
            <img src={trip.image} alt={trip.title} />
            <h3>{trip.title}</h3>
            <p>
              <small>📅 {trip.date}</small>
            </p>
            <p>{trip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

