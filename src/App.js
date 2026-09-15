import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";
import Navbar from "./components/Navbar";

// -------------------
// 画像インポート
// -------------------
import londonCafe from "./assets/articles/london-cafe.jpg";
import manchesterVintage from "./assets/articles/manchester-vintage.jpg";
import scotlandCoffee from "./assets/articles/scotland-coffee.jpg";
import bathAntique from "./assets/articles/bath-antique.jpg";
import birminghamCafe from "./assets/articles/birmingham-cafe.jpg";

// -------------------
// 初期データ
// -------------------
const initialCafes = [
  { id: 1, name: "Attendant", location: "London", note: "元公衆トイレを改装したカフェ" },
  { id: 2, name: "Faculty", location: "Birmingham", note: "a charming café known for its exceptional coffee and pastries" },
  { id: 3, name: "Tamper Coffee", location: "Sheffield", note: "ニュージーランド風ブランチが人気" },
  { id: 4, name: "200 Degrees", location: "Birmingham", note: "おいしいコーヒーと落ち着いた広々とした空間" },
  { id: 5, name: "The Steamie", location: "Glasgow", note: "地元焙煎と手作りスコーンが評判" },
];

const initialAntiques = [
  { id: 1, name: "Old Town Treasures", location: "Oxford", note: "Vintage maps and brass items." },
  { id: 2, name: "Retro Revival", location: "Manchester", note: "Mid-century furniture heaven." },
  { id: 3, name: "Curio Corner", location: "Canterbury", note: "Filled with quirky British finds." },
  { id: 4, name: "Timeless Trinkets", location: "Edinburgh", note: "Small shop with charming curiosities." },
  { id: 5, name: "Antique Alley", location: "Bath", note: "Perfect for vintage postcards and jewelry." },
];

const initialArticles = [
  { id: 1, title: "A Day in London Cafés", summary: "Exploring the hidden cafés in London streets.", image: londonCafe },
  { id: 2, title: "Vintage Finds in Manchester", summary: "Discovering retro treasures in Manchester.", image: manchesterVintage },
  { id: 3, title: "Scottish Coffee Culture", summary: "A look at Glasgow's artisanal coffee shops.", image: scotlandCoffee },
  { id: 4, title: "Bath Antique Walk", summary: "Strolling through Bath's charming antique alleys.", image: bathAntique },
  { id: 5, title: "Birmingham’s Hidden Cafés", summary: "Secret spots for coffee lovers.", image: birminghamCafe },
];

// -------------------
// Home
// -------------------
function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container page-shell">
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

// -------------------
// About
// -------------------
function uniquePlaces(items) {
  return [...new Set(items.map((item) => item.location))];
}

function ExploreAside({ places, extraLinks }) {
  const { t } = useTranslation();

  return (
    <aside className="page-aside">
      {places?.length > 0 && (
        <section className="aside-card">
          <h3>{t("featured_places")}</h3>
          <ul className="place-list">
            {places.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
        </section>
      )}
      <section className="aside-card">
        <h3>{t("explore_more")}</h3>
        <div className="aside-links">
          {extraLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}

function About() {
  const { t } = useTranslation();
  return (
    <div className="page-shell">
      <header className="page-heading">
        <h2>{t("about_title")}</h2>
      </header>
      <div className="about-layout">
        <article className="about-copy">
          <p>{t("about_text")}</p>
          <p>{t("page_intro_articles")}</p>
        </article>
        <div className="about-highlights">
          <h3>{t("about_aside_title")}</h3>
          <Link to="/cafes" className="highlight-card">
            <strong>{t("cafes")}</strong>
            <p>{t("about_highlight_cafes")}</p>
          </Link>
          <Link to="/antiques" className="highlight-card">
            <strong>{t("antiques")}</strong>
            <p>{t("about_highlight_antiques")}</p>
          </Link>
          <Link to="/articles" className="highlight-card">
            <strong>{t("articles")}</strong>
            <p>{t("about_highlight_articles")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// -------------------
// Cafes
// -------------------
function Cafes() {
  const { t } = useTranslation();
  const [cafes, setCafes] = useState(initialCafes);
  const [newCafe, setNewCafe] = useState({ name: "", location: "", note: "" });

  const addCafe = () => {
    if (!newCafe.name || !newCafe.location) return;
    setCafes([...cafes, { id: cafes.length + 1, ...newCafe }]);
    setNewCafe({ name: "", location: "", note: "" });
  };

  return (
    <div className="page-shell">
      <header className="page-heading">
        <h2>{t("cafes_title")}</h2>
        <p>{t("page_intro_cafes")}</p>
      </header>
      <div className="page-with-aside">
        <div>
          <div className="card-grid">
            {cafes.map((cafe) => (
              <Link key={cafe.id} to={`/cafes/${cafe.id}`} className="card cafe-card">
                <span className="place-chip">{cafe.location}</span>
                <strong>{cafe.name}</strong>
                <p>{cafe.note}</p>
              </Link>
            ))}
          </div>
          <form
            className="form-panel"
            onSubmit={(e) => {
              e.preventDefault();
              addCafe();
            }}
          >
            <h3>{t("add_new_cafe")}</h3>
            <p className="form-hint">{t("add_panel_hint")}</p>
            <div className="form-row">
              <input type="text" placeholder={t("name")} value={newCafe.name} onChange={(e) => setNewCafe({ ...newCafe, name: e.target.value })} />
              <input type="text" placeholder={t("location")} value={newCafe.location} onChange={(e) => setNewCafe({ ...newCafe, location: e.target.value })} />
              <input type="text" placeholder={t("note")} value={newCafe.note} onChange={(e) => setNewCafe({ ...newCafe, note: e.target.value })} />
              <button type="submit">{t("add_cafe")}</button>
            </div>
          </form>
        </div>
        <ExploreAside
          places={uniquePlaces(cafes)}
          extraLinks={[
            { to: "/articles", label: t("articles") },
            { to: "/antiques", label: t("antiques") },
            { to: "/about", label: t("about") },
          ]}
        />
      </div>
    </div>
  );
}

// -------------------
// CafeDetail
// -------------------
function CafeDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const cafe = initialCafes.find(c => c.id === parseInt(id));
  if (!cafe) return <p>{t("cafe_not_found")}</p>;

  return (
    <div className="page-shell cafe-detail-container">
      <h2>{cafe.name}</h2>
      <p>{cafe.location}</p>
      <p>{cafe.note}</p>
      <Link to="/cafes">← {t("back_to_cafes")}</Link>
    </div>
  );
}

// -------------------
// Antiques
// -------------------
function Antiques() {
  const { t } = useTranslation();
  const [antiques, setAntiques] = useState(initialAntiques);
  const [newAntique, setNewAntique] = useState({ name: "", location: "", note: "" });

  const addAntique = () => {
    if (!newAntique.name || !newAntique.location) return;
    setAntiques([...antiques, { id: antiques.length + 1, ...newAntique }]);
    setNewAntique({ name: "", location: "", note: "" });
  };

  return (
    <div className="page-shell">
      <header className="page-heading">
        <h2>{t("antiques_title")}</h2>
        <p>{t("page_intro_antiques")}</p>
      </header>
      <div className="page-with-aside">
        <div>
          <div className="card-grid">
            {antiques.map((shop) => (
              <Link key={shop.id} to={`/antiques/${shop.id}`} className="card cafe-card">
                <span className="place-chip">{shop.location}</span>
                <strong>{shop.name}</strong>
                <p>{shop.note}</p>
              </Link>
            ))}
          </div>
          <form
            className="form-panel"
            onSubmit={(e) => {
              e.preventDefault();
              addAntique();
            }}
          >
            <h3>{t("add_new_antique")}</h3>
            <p className="form-hint">{t("add_panel_hint")}</p>
            <div className="form-row">
              <input type="text" placeholder={t("name")} value={newAntique.name} onChange={(e) => setNewAntique({ ...newAntique, name: e.target.value })} />
              <input type="text" placeholder={t("location")} value={newAntique.location} onChange={(e) => setNewAntique({ ...newAntique, location: e.target.value })} />
              <input type="text" placeholder={t("note")} value={newAntique.note} onChange={(e) => setNewAntique({ ...newAntique, note: e.target.value })} />
              <button type="submit">{t("add_antique")}</button>
            </div>
          </form>
        </div>
        <ExploreAside
          places={uniquePlaces(antiques)}
          extraLinks={[
            { to: "/cafes", label: t("cafes") },
            { to: "/articles", label: t("articles") },
            { to: "/about", label: t("about") },
          ]}
        />
      </div>
    </div>
  );
}

// -------------------
// AntiqueDetail
// -------------------
function AntiqueDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const shop = initialAntiques.find(a => a.id === parseInt(id));
  if (!shop) return <p>{t("antique_not_found")}</p>;

  return (
    <div className="page-shell cafe-detail-container">
      <h2>{shop.name}</h2>
      <p>{shop.location}</p>
      <p>{shop.note}</p>
      <Link to="/antiques">← {t("back_to_antiques")}</Link>
    </div>
  );
}

// -------------------
// Articles
// -------------------
function Articles() {
  const { t } = useTranslation();

  return (
    <div className="page-shell">
      <header className="page-heading">
        <h2>{t("articles_list")}</h2>
        <p>{t("page_intro_articles")}</p>
      </header>
      <div className="page-with-aside">
        <div className="card-grid">
          {initialArticles.map((article) => (
            <div key={article.id} className="card article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <strong>{article.title}</strong>
              <p>{article.summary}</p>
              <Link to={`/articles/${article.id}`}>{t("read_more")} →</Link>
            </div>
          ))}
        </div>
        <ExploreAside
          extraLinks={[
            { to: "/cafes", label: t("cafes") },
            { to: "/antiques", label: t("antiques") },
            { to: "/about", label: t("about") },
          ]}
        />
      </div>
    </div>
  );
}

// -------------------
// ArticleDetail
// -------------------
function ArticleDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const article = initialArticles.find(a => a.id === parseInt(id));
  if (!article) return <p>{t("article_not_found")}</p>;

  return (
    <div className="page-shell cafe-detail-container">
      <img src={article.image} alt={article.title} className="article-detail-image" />
      <h2>{article.title}</h2>
      <p>{article.summary}</p>
      <p>{t("article_detail_placeholder")}</p>
      <Link to="/articles">← {t("back_to_articles")}</Link>
    </div>
  );
}

// -------------------
// App
// -------------------
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/cafes/:id" element={<CafeDetail />} />
          <Route path="/antiques" element={<Antiques />} />
          <Route path="/antiques/:id" element={<AntiqueDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
