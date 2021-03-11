import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <section id="main">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
};

export default Main;
