import { ThemeProvider } from "./themeProvider";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
