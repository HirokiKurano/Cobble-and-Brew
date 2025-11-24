import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const initialAntiques = [
  { id: 1, name: "Old Town Treasures", location: "Oxford", note: "Vintage maps" }
];

function Antiques() {
  const { t } = useTranslation();
  const [antiques, setAntiques] = useState(initialAntiques);
  const [newAntique, setNewAntique] = useState({ name: "", location: "", note: "" });

  const handleAdd = () => {
    if (!newAntique.name || !newAntique.location) return;
    setAntiques([...antiques, { id: antiques.length + 1, ...newAntique }]);
    setNewAntique({ name: "", location: "", note: "" });
  };

  return (
    <div>
      <h2>🕰️ {t("antiques.title")}</h2>

      {antiques.map((shop) => (
        <div key={shop.id} className="card">
          <strong>{shop.name}</strong> — {shop.location}
          <p>{shop.note}</p>
        </div>
      ))}

      <h3>{t("antiques.add")}</h3>

      <input
        type="text"
        placeholder={t("form.name")}
        value={newAntique.name}
        onChange={(e) => setNewAntique({ ...newAntique, name: e.target.value })}
      />

      <input
        type="text"
        placeholder={t("form.location")}
        value={newAntique.location}
        onChange={(e) => setNewAntique({ ...newAntique, location: e.target.value })}
      />

      <input
        type="text"
        placeholder={t("form.note")}
        value={newAntique.note}
        onChange={(e) => setNewAntique({ ...newAntique, note: e.target.value })}
      />

      <button onClick={handleAdd}>{t("form.addBtn")}</button>
    </div>
  );
}

export default Antiques;
