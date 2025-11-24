# Wander in Britain

**Wander in Britain** is a React application that showcases cafés and antique shops across the UK.  
It features multilingual support (English and Japanese), allowing users to easily switch languages.

---

## Demo

- Home page with an introduction
- Café listing page
- Antique shop listing page
- About page
- Language switch buttons (EN / JP) in the top-right corner

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
- Add and delete items (state is stored in-browser)
- Multilingual support using i18next
- Responsive design (mobile & desktop)
- Antique-style UI with elegant fonts and card layouts

---

## Tech Stack

- **Frontend:** React.js (React Router v6)
- **Styling:** CSS with responsive design
- **Internationalization:** i18next + react-i18next
- **Development Tool:** Create React App
- **Package Manager:** npm

---

## Setup

1. Clone the repository

```bash
git clone <repository-url>
cd wander-in-britain


Install dependencies

npm install
npm install i18next react-i18next

Start the development server

npm start

Open http://localhost:3000
 in your browser to view the app



 Folder Structure (main files)
wander-in-britain/
│
├─ src/
│   ├─ App.js           # Main component
│   ├─ App.css          # Styles
│   ├─ i18n.js          # i18next initialization
│   ├─ locales/
│   │   ├─ en.json      # English translations
│   │   └─ jp.json      # Japanese translations
│   └─ index.js
├─ package.json
└─ README.md

Future Improvements

Connect to a database (e.g., MongoDB, Firebase) to persist cafés and antique shop data

Add user authentication and commenting features

Implement search and filtering functionality

Fine-tune UI design and add theme switching (light/dark mode)

License

This project is licensed under the MIT License.
