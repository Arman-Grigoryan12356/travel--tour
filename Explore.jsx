export default function Explore() {
  const trips = [
    {
      id: 1,
      title: "Paris Adventure",
      location: "France",
      date: "2024-05-12",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      id: 2,
      title: "Beach Paradise",
      location: "Maldives",
      date: "2024-06-20",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 3,
      title: "Mountain Escape",
      location: "Switzerland",
      date: "2024-07-10",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
  ];

  return (
    <div className="container">
      <h2>Explore Trips</h2>
      <div className="gallery">
        {trips.map((trip) => (
          <div className="card" key={trip.id}>
            <img
              src={trip.image}
              alt={trip.title}
              style={{ width: "770px", height: "auto" }}
            />
            <h3>{trip.title}</h3>
            <p>{trip.location}</p>
            <small>{trip.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}


