import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

const App = () => {
  return <main className="max-w-7xl mx-auto">
    <NavBar />
    <Hero />
    <About />
  </main>
};

export default App;