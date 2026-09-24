# iSkafferiet

iSkafferiet är en responsiv skafferiapp byggd med React. Appen gör det enkelt att hålla koll på varor hemma, söka och filtrera bland dem och få receptförslag baserat på innehållet i skafferiet.

## Funktioner

- Lägg till varor i skafferiet
- Ange kategori, antal och bäst före-datum
- Visa detaljer för varje vara
- Ta bort varor
- Söka bland varor
- Filtrera varor efter kategori
- Spara varor mellan sidladdningar med `localStorage`
- Hämta receptförslag från TheMealDB API
- Visa loading-status medan recept hämtas
- Hantera API-fel och visa tydliga felmeddelanden
- Visa tydliga meddelanden när inga varor eller recept hittas
- Responsiv design för olika skärmstorlekar
- Tillgänglighetsanpassning för tangentbordsnavigering och skärmläsare

## Teknik

- React
- JavaScript
- Vite
- React Router
- Context API
- Custom Hooks
- CSS
- TheMealDB API
- localStorage
- React Hot Toast

## Struktur

Projektet är uppdelat i komponenter, sidor, context, hooks och services för att hålla koden strukturerad och lättare att underhålla.

src/
├── components/
│   ├── AddItemForm/
│   ├── CategoryFilter/
│   ├── Footer/
│   ├── Header/
│   ├── Loading/
│   ├── PantryItem/
│   ├── PantryList/
│   ├── RecipeList/
│   └── SearchBar/
├── context/
│   └── PantryContext.jsx
├── hooks/
│   └── useRecipes.js
├── pages/
│   ├── Home/
│   ├── AddItem/
│   └── ItemDetails/
├── services/
│   └── recipeApi.js
├── App.jsx
├── index.css
└── main.jsx

## Routing

Appen använder React Router och innehåller tre vyer:

- `/` – Skafferiet
- `/add` – Lägg till vara
- `/item/:id` – Detaljsida för en vara

Navigeringen sker utan att sidan behöver laddas om.

## State och data

Skafferiets gemensamma state hanteras med Context API. Varorna sparas i `localStorage` så att de finns kvar även efter att sidan laddas om.

Formuläret för att lägga till varor använder lokal state för formulärvärden och innehåller validering av obligatoriska fält.

## Recept

Receptförslag hämtas från [TheMealDB](https://www.themealdb.com/) baserat på namnet på den valda varan.

Datahämtningen är separerad från presentationen genom en service och en custom hook. Appen hanterar loading, API-fel och situationer där inga recept hittas.

## Tillgänglighet

Tillgänglighet har varit en del av utvecklingen av appen.

Appen innehåller bland annat:

- Semantisk HTML
- Tydliga formulärlabels
- Tangentbordsnavigering
- ARIA-attribut där det behövs
- Status- och felmeddelanden som kan uppfattas av skärmläsare
- Beskrivande texter för bilder och länkar

Appens navigering och funktioner har testats med skärmläsare.

## Kom igång

### Klona projektet

git clone https://github.com/adTori/i-skafferiet.git

### Installera dependencies

cd i-skafferiet
npm install

### Starta utvecklingsservern

npm run dev

Öppna sedan adressen som visas i terminalen.

## Demo

[Öppna iSkafferiet](https://iskafferiet.vercel.app/)

## GitHub

[GitHub-repository](https://github.com/adTori/i-skafferiet)

## Skapad av

Victoria Friberg  
2026
