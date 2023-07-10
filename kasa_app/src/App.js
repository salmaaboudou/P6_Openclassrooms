import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import HousingCards from "./pages/HousingCards.jsx";
import Layout from "./components/Layout.jsx";
import { useEffect, useState } from "react";

function App() {
      const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);
      const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 375 );

      useEffect(() => {
            const handleResize = () => {
                  setIsSmallScreen(window.innerWidth <= 1200); // Mettre à jour la taille de l'écran lors du redimensionnement
                  setIsBigScreen(window.innerWidth > 375);
            };

            window.addEventListener("resize", handleResize); // Ajouter le gestionnaire d'événement resize

            return () => {
                  window.removeEventListener("resize", handleResize); // Supprimer le gestionnaire d'événement resize lors du démontage du composant
            };
      }, []);



      return (
            <Router>
                  <Layout isSmallScreen={isSmallScreen}>
                        <Routes>
                              <Route path="/" element={<Home isBigScreen={isBigScreen} />} />
                              <Route path="/housing-cards" element={<HousingCards />} />
                              <Route path="/about" element={<About />} />
                              <Route path="*" element={<NotFound />} />
                        </Routes>
                  </Layout>
            </Router>
      );
}

export default App;
