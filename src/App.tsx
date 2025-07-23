import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

function App() {
  return (
 <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
        duration: 0.8,
      }}
      className="pt-20"
    >


      <Header />
      <Hero />
       <About />
       <Projects/>
       <Contact/>
    </motion.div>
  );
}

export default App;  
