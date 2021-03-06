import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 8,
              color: "#f9ab00"
            }
          }
        }
    }}
    />
    <Navbar />
    <Header />
    <AboutMe />
    <Services />
    <Testimonials />
    <Contacts />
    <Footer />
    </>
  );
}

export default App;