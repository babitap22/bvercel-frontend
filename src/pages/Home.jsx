import React from "react";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import ThankYou from "../components/ThankYou";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      
      <HeroSection />

      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <ThankYou />
    </>
  );
};

export default Home;
