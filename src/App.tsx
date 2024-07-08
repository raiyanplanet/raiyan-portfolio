import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ClientReview from "./components/ClientReview";
import Footer from "./components/Footer";
import Experiance from "./components/Experiance";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experiance />
      <ClientReview reviews={[]} />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
