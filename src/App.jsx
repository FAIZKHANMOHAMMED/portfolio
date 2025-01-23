import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar/index.jsx";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection/index.jsx";
import About from "./components/About/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Projects from "./components/Projects/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Experience from "./components/Experience/index.jsx";
import Education from "./components/Education/index.jsx";
import ProjectDetails from "./components/ProjectDetails/index.jsx";
import styled from "styled-components";

const Body = styled.div`
background-color:rgb(88, 85, 85);
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  width: 100%;
 
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
