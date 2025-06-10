import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";

import Power from "./pages/category/Power";
import Construction from "./pages/category/Construction";
import SparePart from "./pages/category/SparePart";
import Chemicals from "./pages/category/Chemicals";
import PetReisin from "./pages/category/PetReisin";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/category" element={<Category />} />
            <Route path="/category/power" element={<Power />} />
            <Route path="/category/construction" element={<Construction />} />
            <Route path="/category/spare-part" element={<SparePart />} />
            <Route path="/category/chemicals" element={<Chemicals />} />
            <Route path="/category/pet-reisin" element={<PetReisin />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
