import NavBar from "./components/NavBar";
import About from "./components/about/about";
import Videos from "./components/videos/videos";
import Photos from "./components/photography/photo";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import { ConfigProvider } from "./components/configContext";
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
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
          </Routes>
        </Router>
        <Footer />
      </ChakraProvider>
    </ConfigProvider>
  );
}

export default App;
