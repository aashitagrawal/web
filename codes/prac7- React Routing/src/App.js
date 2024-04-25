import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div>
      <p class="title">21BIT005</p>

      <div class="navbar">
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/navbar" element={<Navbar />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;