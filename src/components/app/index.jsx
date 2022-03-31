import React from 'react';

import './style.module.scss';

import About from "../about";
import Header from "../header";
import Tools from "../tools";
import Skills from '../skills';
import Projects from "../projects";
import Footer from "../footer";
// import Nav from '../nav';

function App() {
  return (
    <>
      <Header title="Rômulo Semião" subtitle="Front-end Dev" />
      {/* <Nav /> */}
      <About id="about" />
      <Tools id="tools" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Footer />
    </>
  );
}

export default App;
