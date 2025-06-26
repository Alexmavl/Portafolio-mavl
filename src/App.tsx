import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="pt-20">
      <Header />
      <Hero />
       <About />
       <Projects/>
       <Contact/>
    </div>
  );
}

export default App;  
