import Navbar from './components/Navbar';
import Hero from './components/HeroSection'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Services from './components/Services'
import Testimonials   from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './Context/ThemeContext';
export default function App() {
  return (
    <>
    <ThemeProvider> 
    <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      {/* <Certifications /> */}
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />

      </ThemeProvider>  
    </>
  );
}
