import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// 画像インポート
import londonCafe from "../assets/articles/london-cafe.jpg";
import manchesterVintage from "../assets/articles/manchester-vintage.jpg";
import scotlandCoffee from "../assets/articles/scotland-coffee.jpg";
import bathAntique from "../assets/articles/bath-antique.jpg";
import birminghamCafe from "../assets/articles/birmingham-cafe.jpg";

// 記事データ
const initialArticles = [
  { id: 1, title: "A Day in London Cafés", summary: "Exploring the hidden cafés in London streets.", image: londonCafe },
  { id: 2, title: "Vintage Finds in Manchester", summary: "Discovering retro treasures in Manchester.", image: manchesterVintage },
  { id: 3, title: "Scottish Coffee Culture", summary: "A look at Glasgow's artisanal coffee shops.", image: scotlandCoffee },
  { id: 4, title: "Bath Antique Walk", summary: "Strolling through Bath's charming antique alleys.", image: bathAntique },
  { id: 5, title: "Birmingham’s Hidden Cafés", summary: "Secret spots for coffee lovers.", image: birminghamCafe },
];

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h2>{t("home_welcome")}</h2>
      <p>{t("home_intro")}</p>

      <h3>{t("latest_articles")}</h3>
      <div className="articles-preview">
        {initialArticles.slice(0, 4).map(article => (
          <div key={article.id} className="card article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <strong>{article.title}</strong>
            <p>{article.summary}</p>
            <Link to={`/articles/${article.id}`}>{t("read_more")} →</Link>
          </div>
        ))}
      </div>
      <Link to="/articles" className="more-link">{t("view_all_articles")}</Link>
    </div>
  );
}

export default Home;
