import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Founders from './components/Founders';
import FindUs from './components/FindUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Founders />
        <FindUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
