import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Ministerios from './pages/Ministerios';
import Contato from './pages/Contato';
import Transmissoes from './pages/Transmissoes';
import ScrollToTop from './components/ScrollToTop'; // ← ADICIONE ESTA LINHA
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop /> {/* ← ADICIONE ESTE COMPONENTE */}
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/transmissoes" element={<Transmissoes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;