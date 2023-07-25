import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import HousingPages from "./pages/HousingPages.jsx";
import Layout from "./components/Layout.jsx";
import { useEffect, useState } from "react";

function App() {
      const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);
      const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 375 );

      // S'execute à chaque fois que la page est resize 
      useEffect(() => { 
            const handleResize = () => {
                  setIsSmallScreen(window.innerWidth <= 1200); 
                  setIsBigScreen(window.innerWidth > 375);
            };

            window.addEventListener("resize", handleResize); 

            return () => {
                  window.removeEventListener("resize", handleResize); 
            };
      }, []);



      return (
            <Router>
                  <Layout isSmallScreen={isSmallScreen}>
                        <Routes>
                              <Route path="/" element={<Home isBigScreen={isBigScreen} />} />
                              <Route path="/housing-page/:id" element={<HousingPages />} />
                              <Route path="/about" element={<About />} />
                              <Route path="*" element={<NotFound />} />
                              <Route path="/not-found" element={<NotFound />} />
                        </Routes>
                  </Layout>
            </Router>
      );
}

export default App;
