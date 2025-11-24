import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

function ArticleDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const article = initialArticles.find(a => a.id === parseInt(id));
  if (!article) return <p>{t("article_not_found")}</p>;

  return (
    <div className="cafe-detail-container">
      <img src={article.image} alt={article.title} className="article-detail-image" />
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <p>{t("article_detail_placeholder")}</p>
      <Link to="/articles">← {t("back_to_articles")}</Link>
    </div>
  );
}

export default ArticleDetail;
