import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import HousingCards from "./pages/HousingCards.jsx";
import Layout from "./components/Layout.jsx";

function App() {
        return (
                <Router>
                        <Layout>
                                <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/housing-cards" element={<HousingCards />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="*" element={<NotFound />} />
                                </Routes>
                        </Layout>
                </Router>
        );
}

export default App;
