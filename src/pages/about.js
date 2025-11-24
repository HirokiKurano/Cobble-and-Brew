import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h2>{t("about.title")}</h2>
      <p>{t("about.text")}</p>
    </div>
  );
}

export default About;
