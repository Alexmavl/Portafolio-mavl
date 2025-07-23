import React from 'react';
import { motion } from "framer-motion"; 
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import './App.css';

/**
 * @typedef {Object} AppProps

 */
interface AppProps {}

/**

 * @param {AppProps} props 
 * @returns {JSX.Element} 
 */
const App: React.FC<AppProps> = () => {
  return (
    <>
     
      <div className="space-meteors"></div>
      <div className="meteor-extra"></div>
      <div className="star-particles"></div>

     
      <motion.div
        id="root" 
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          type: "spring" as const,
          stiffness: 150,
          damping: 10,
          duration: 0.8,
        }}
        className="pt-20 relative z-20"
      >
       
        <Header />
        <Hero />
        <About />
        <Projects/>
        <Contact/>
      </motion.div>
    </>
  );
};

export default App;