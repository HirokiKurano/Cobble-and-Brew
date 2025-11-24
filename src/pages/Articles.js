import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// 画像インポート
import londonCafe from "../assets/articles/london-cafe.jpg";
import manchesterVintage from "../assets/articles/manchester-vintage.jpg";
import scotlandCoffee from "../assets/articles/scotland-coffee.jpg";
import bathAntique from "../assets/articles/bath-antique.jpg";
import birminghamCafe from "../assets/articles/birmingham-cafe.jpg";

const initialArticles = [
  { id: 1, title: "A Day in London Cafés", summary: "Exploring the hidden cafés in London streets.", image: londonCafe },
  { id: 2, title: "Vintage Finds in Manchester", summary: "Discovering retro treasures in Manchester.", image: manchesterVintage },
  { id: 3, title: "Scottish Coffee Culture", summary: "A look at Glasgow's artisanal coffee shops.", image: scotlandCoffee },
  { id: 4, title: "Bath Antique Walk", summary: "Strolling through Bath's charming antique alleys.", image: bathAntique },
  { id: 5, title: "Birmingham’s Hidden Cafés", summary: "Secret spots for coffee lovers.", image: birminghamCafe },
];

function Articles() {
  const { t } = useTranslation();

  return (
    <div className="cafes-page">
      <h2>{t("articles_list")}</h2>
      {initialArticles.map(article => (
        <div key={article.id} className="card article-card">
          <img src={article.image} alt={article.title} className="article-image" />
          <strong>{article.title}</strong>
          <p>{article.summary}</p>
          <Link to={`/articles/${article.id}`}>{t("read_more")} →</Link>
        </div>
      ))}
    </div>
  );
}

export default Articles;
