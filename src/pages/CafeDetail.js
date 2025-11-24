import React from "react";
import { useParams, Link } from "react-router-dom";

const initialCafesDetail = [
  {
    id: 1,
    name: "Attendant",
    location: "London",
    note: "元公衆トイレを改装したカフェ",
    image: "https://source.unsplash.com/600x400/?cafe"
  },
  {
    id: 2,
    name: "Faculty",
    location: "Birmingham",
    note: "a charming café known for its exceptional coffee and pastries",
    image: "https://source.unsplash.com/600x400/?coffee"
  }
];

export default function CafeDetail() {
  const { id } = useParams();
  const cafe = initialCafesDetail.find(c => c.id === parseInt(id));

  if (!cafe) return <p>Café not found</p>;

  return (
    <div className="cafe-detail-container">
      <div className="card">
        <h2>{cafe.name}</h2>
        <img src={cafe.image} alt={cafe.name} />
        <p>{cafe.location}</p>
        <p>{cafe.note}</p>
        <Link to="/cafes">← Back to Cafés</Link>
      </div>
    </div>
  );
}
