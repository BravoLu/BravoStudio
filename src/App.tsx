import { useEffect } from "react";
import NavBar from "./components/NavBar";
import About from "./components/about/about";
import Videos from "./components/videos/videos";
import Photos from "./components/photography/photo";
import Projects from "./components/projects/projects";
import Medals from "./components/medals/Medals";
import Footer from "./components/footer";
import ReactGA from "react-ga";
import { ConfigProvider } from "./components/configContext";
import { ChakraProvider } from "@chakra-ui/react";

ReactGA.initialize("G-HBRNGCS12H");

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Publications from "./components/publication/Publications";

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <ConfigProvider>
      <ChakraProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/medals" element={<Medals/>} />
            <Route path="/publications" element={<Publications/>} />
          </Routes>
        </Router>
        <Footer />
      </ChakraProvider>
    </ConfigProvider>
  );
}

export default App;
