import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Gallery />
            </main>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
