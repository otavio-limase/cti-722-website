import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import McGallery from './pages/McGallery';
import PCCGallery from './pages/PCCGallery';
import Functions from './pages/Functions';
import PeriodDetailsPage from './pages/PeriodDetailsPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container"> 
        <Header />
        <main className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria-mcs" element={<McGallery />} />
            <Route path="/galeria-pccs" element={<PCCGallery />} />
            <Route path="/cargos" element={<Functions />} />
            <Route path="/period/:periodId" element={<PeriodDetailsPage />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
