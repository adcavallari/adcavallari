import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Ministerios from './pages/Ministerios';
import Contato from './pages/Contato';
import Transmissoes from './pages/Transmissoes';
import './styles/App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ministerios" element={<Ministerios />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/transmissoes" element={<Transmissoes />} />
            {/* Redireciona qualquer rota não encontrada para home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;