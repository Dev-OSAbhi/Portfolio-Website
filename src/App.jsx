import { Analytics } from "@vercel/analytics/react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  return <main className="max-w-7xl mx-auto">
    <NavBar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    <Analytics />
  </main>
};

export default App;