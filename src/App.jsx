import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import AddItem from "./pages/AddItem/AddItem";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetails />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;