import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ReactDOM from 'react-dom/client';

import './App.css';

import Home from './views/home/Home';
import Menu from './views/menu/Menu';
import About from './views/about/About';
import Book from './views/book/Book';
import Contact from './views/contact/Contact'

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;