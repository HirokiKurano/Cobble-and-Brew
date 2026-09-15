import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <header className="header">
      <h1>{t("title")}</h1>
      <nav>
        <Link to="/">{t("home")}</Link>
        <Link to="/articles">{t("articles")}</Link>
        <Link to="/cafes">{t("cafes")}</Link>
        <Link to="/antiques">{t("antiques")}</Link>
        <Link to="/about">{t("about")}</Link>
      </nav>
      <div className="lang-switch">
        <button
          className={i18n.language.startsWith("en") ? "active" : ""}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </button>
        <button
          className={i18n.language.startsWith("ja") ? "active" : ""}
          onClick={() => i18n.changeLanguage("ja")}
        >
          日本語
        </button>
      </div>
    </header>
  );
}

export default Navbar;
