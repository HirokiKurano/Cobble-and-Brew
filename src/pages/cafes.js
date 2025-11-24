import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const initialCafes = [
  { id: 1, name: "Attendant", location: "London", note: "元公衆トイレを改装したカフェ" },
  { id: 2, name: "Faculty", location: "Birmingham", note: "a charming café known for its exceptional coffee and delectable pastries" },
  { id: 3, name: "Tamper Coffee", location: "Sheffield", note: "ニュージーランド風ブランチが人気" },
  { id: 4, name: "200 Degrees", location: "Birmingham", note: "おいしいコーヒーと落ち着いた広々とした空間" },
  { id: 5, name: "The Steamie", location: "Glasgow", note: "地元焙煎と手作りスコーンが評判" },
];

export default function Cafes() {
  const { t } = useTranslation();
  const [cafes, setCafes] = useState(initialCafes);
  const [newCafe, setNewCafe] = useState({ name: "", location: "", note: "" });

  const addCafe = () => {
    if (!newCafe.name || !newCafe.location) return;
    setCafes([...cafes, { id: cafes.length + 1, ...newCafe }]);
    setNewCafe({ name: "", location: "", note: "" });
  };

  return (
    <div className="cafes-page">
      <h2>Favourite Cafés</h2>

      {cafes.map((cafe) => (
        <div key={cafe.id} className="cafe-card">
          <strong>{cafe.name}</strong> — {cafe.location}
          <p>{cafe.note}</p>
        </div>
      ))}

      <h3>Add a new café</h3>
      <input
        type="text"
        placeholder="Name"
        value={newCafe.name}
        onChange={(e) => setNewCafe({ ...newCafe, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        value={newCafe.location}
        onChange={(e) => setNewCafe({ ...newCafe, location: e.target.value })}
      />
      <input
        type="text"
        placeholder="Note"
        value={newCafe.note}
        onChange={(e) => setNewCafe({ ...newCafe, note: e.target.value })}
      />
      <button onClick={addCafe}>Add Café</button>
    </div>
  );
}
