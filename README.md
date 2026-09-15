# Cobble & Brew

**Cobble & Brew** is a React application that showcases cafés and antique shops across the UK.
It features multilingual support (English and Japanese), allowing users to switch languages from the header.

---

## Demo

- Home page with an introduction and latest articles
- Café listing and detail pages
- Antique shop listing and detail pages
- Articles listing and detail pages
- About page
- Language switch buttons (EN / 日本語) in the header

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Features

- Display lists of cafés and antique shops
- Add items on the café and antique pages (state is stored in the browser)
- Multilingual support using i18next
- Responsive design (mobile and desktop)
- Antique-style UI with serif fonts and card layouts

---

## Tech Stack

- **Frontend:** React.js (React Router)
- **Styling:** CSS with responsive design
- **Internationalization:** i18next + react-i18next
- **Development Tool:** Create React App
- **Package Manager:** npm

---

## Setup

1. Clone the repository

```bash
git clone https://github.com/HirokiKurano/Cobble-and-Brew.git
cd Cobble-and-Brew
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Folder Structure

```
Cobble-and-Brew/
│
├─ public/
│   └─ index.html
├─ src/
│   ├─ App.js                 # Routes and page components
│   ├─ App.css                # Styles
│   ├─ i18n.js                # i18next initialization
│   ├─ components/
│   │   └─ Navbar.js          # Header, navigation, language switch
│   ├─ locales/
│   │   ├─ en/translation.json
│   │   └─ ja/translation.json
│   ├─ pages/                 # Alternate page drafts (not wired into App yet)
│   ├─ assets/articles/       # Article images
│   └─ index.js
├─ package.json
└─ README.md
```

---

## Future Improvements

- Connect to a database (e.g. MongoDB, Firebase) to persist cafés and antique shop data
- Add user authentication and commenting features
- Implement search and filtering functionality
- Fine-tune UI design and add theme switching (light/dark mode)

---

## License

This project is licensed under the MIT License.
