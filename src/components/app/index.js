import React from 'react';

import About from "../about";
import Header from "../header";
import Tools from "../tools";
import Skills from '../skills';
import Projects from "../projects";
import Footer from "../footer";

function App() {
  return (
    <>
      <Header title="Rômulo Semião" subtitle="Front-end Dev" />
      <About />
      <Tools />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
