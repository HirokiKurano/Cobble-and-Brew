import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <Link to="/">{t("nav.home")}</Link>
      <Link to="/cafes">{t("nav.cafes")}</Link>
      <Link to="/antiques">{t("nav.antiques")}</Link>
      <Link to="/about">{t("nav.about")}</Link>

      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="lang-select"
      >
        <option value="en">EN</option>
        <option value="jp">JP</option>
      </select>
    </nav>
  );
}

export default Navbar;
