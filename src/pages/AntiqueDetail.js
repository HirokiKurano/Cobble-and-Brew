import React from "react";
import { useParams } from "react-router-dom";

const initialAntiques = [
  { id: 1, name: "Old Town Treasures", location: "Oxford", note: "Vintage maps", image: "https://source.unsplash.com/600x400/?antique" },
  { id: 2, name: "Retro Revival", location: "Manchester", note: "Mid-century furniture", image: "https://source.unsplash.com/600x400/?furniture" }
];

function AntiqueDetail() {
  const { id } = useParams();
  const shop = initialAntiques.find(a => a.id === parseInt(id));
  if (!shop) return <p>Antique shop not found</p>;

  return (
    <div className="card">
      <h2>{shop.name}</h2>
      <img src={shop.image} alt={shop.name} />
      <p>{shop.location}</p>
      <p>{shop.note}</p>
    </div>
  );
}

export default AntiqueDetail;
