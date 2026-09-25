# iSkafferiet

iSkafferiet is a responsive pantry management app built with React. The app makes it easy to keep track of items in your pantry, search and filter them, and get recipe suggestions based on the items you have.

## Features

- Add items to the pantry
- Add category, quantity and best-before date
- View details for each pantry item
- Remove items
- Search for pantry items
- Filter items by category
- Save items between page reloads using `localStorage`
- Fetch recipe suggestions from TheMealDB API
- Display a loading state while recipes are being fetched
- Handle API errors with clear error messages
- Display clear empty states when no items or recipes are found
- Responsive design for different screen sizes
- Accessibility support for keyboard navigation and screen readers

## Technologies

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


## Pictures
<img width="1599" height="695" alt="Skärmbild 2026-09-25 101130" src="https://github.com/user-attachments/assets/82c161f1-22e1-4e18-b540-9605f9f0a3e3" />

<img width="1600" height="684" alt="Skärmbild 2026-09-25 110309" src="https://github.com/user-attachments/assets/c1549655-938a-4b1a-b25b-4194a54121b6" />


## Project Structure

The project is organized into components, pages, context, hooks and services to keep the code structured and maintainable.

```text
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
```

## Routing

The app uses React Router and includes three views:

- `/` – Pantry
- `/add` – Add an item
- `/item/:id` – Item details

Navigation between the views takes place without reloading the page.

## State and Data

The pantry's shared state is managed using the Context API. Pantry items are stored in `localStorage` so that they remain available after reloading the page.

The add-item form uses local state for form values and includes validation for required fields.

## Recipes

Recipe suggestions are fetched from [TheMealDB](https://www.themealdb.com/) based on the name of the selected pantry item.

Data fetching is separated from the presentation layer using a service and a custom hook. The app handles loading states, API errors and situations where no recipes are found.

## Accessibility

Accessibility has been an important part of the development of the app.

The app includes:

- Semantic HTML
- Clear form labels
- Keyboard navigation
- ARIA attributes where needed
- Status and error messages that can be interpreted by screen readers
- Descriptive text for images and links

The app's navigation and functionality have been tested using a screen reader.

## Getting Started

### Clone the repository

git clone https://github.com/adTori/i-skafferiet.git

### Install dependencies

cd i-skafferiet
npm install

### Start the development server

npm run dev

Open the local URL shown in the terminal.

## Demo

[Open iSkafferiet](https://iskafferiet.vercel.app/)

## GitHub

[GitHub Repository](https://github.com/adTori/i-skafferiet)

## Created by

Victoria Friberg  
2026
