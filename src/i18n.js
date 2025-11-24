import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Cobble & Brew",
      home: "Home",
      cafes: "Cafés",
      antiques: "Antiques",
      about: "About",
      articles: "Articles",

      home_welcome: "Welcome to Cobble & Brew",
      home_intro: "Discover and share insights on captivating spots, hidden gems, and unique locations across the UK.",

      latest_articles: "Latest Articles",
      read_more: "Read More",
      view_all_articles: "View All Articles",
      articles_list: "Articles",
      back_to_articles: "Back to Articles",
      article_not_found: "Article not found",
      article_detail_placeholder: "Detailed content for this article goes here.",

      cafes_title: "Favourite Cafés",
      add_cafe: "Add Café",
      add_new_cafe: "Add a new café",

      antiques_title: "Antique Shops",
      add_antique: "Add Antique",
      add_new_antique: "Add a new antique shop",

      about_title: "About This Site",
      about_text: "This website showcases my learning journey in web development, featuring cafés and antique shops I discovered in the UK.",

      delete: "Delete",
      add: "Add",
      name: "Name",
      location: "Location",
      note: "Note"
    }
  },
  ja: {
    translation: {
      title: "Cobble & Brew",
      home: "ホーム",
      cafes: "カフェ",
      antiques: "アンティーク",
      about: "このサイトについて",
      articles: "記事",

      home_welcome: "Welcome to Cobble & Brew",
      home_intro: "イギリス各地のカフェやアンティークショップ、隠れた名所を探索します。",

      latest_articles: "最新の記事",
      read_more: "続きを読む",
      view_all_articles: "もっと見る",
      articles_list: "記事一覧",
      back_to_articles: "記事一覧に戻る",
      article_not_found: "記事が見つかりません",
      article_detail_placeholder: "ここに記事の詳細コンテンツが入ります。",

      cafes_title: "お気に入りカフェ",
      add_cafe: "カフェを追加",
      add_new_cafe: "新しいカフェを追加",

      antiques_title: "アンティークショップ",
      add_antique: "アンティークを追加",
      add_new_antique: "新しいアンティークショップを追加",

      about_title: "このサイトについて",
      about_text: "このサイトは Web 開発学習の一環として制作した、イギリスで見つけたカフェとアンティークの記録です。",

      delete: "削除",
      add: "追加",
      name: "名前",
      location: "場所",
      note: "メモ"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
