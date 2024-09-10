import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import Footer from './components/Footer/Footer';
import BattingOrderBlog from "./assets/configs/battingOrderBlog.js";
import Stat429FinalProject from './assets/configs/cornYieldPrediction.js';
import SoybeanGARCH from './assets/configs/soybeanGARCH.js';
import Lottery from './assets/configs/NBALottery.js';
import Picks from './assets/configs/NBA_Picks.csv';
import './App.css';
import React from 'react';

function App() {
    // Use `basename` only in production for GitHub Pages
    const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;
    const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '/';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Router basename={basename}>
                <NavBar />
                <Container sx={{ flex: 1, py: 3 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/blogs/batting-order-optimization" element={<BattingOrderBlog />} />
                        <Route path="/blogs/corn-yield" element={<Stat429FinalProject />} />
                        <Route path="/blogs/soybean-garch" element={<SoybeanGARCH />} />
                        <Route path="/blogs/NBA" element={<Lottery />} />
                        <Route path="/blogs/NBA/Picks" element={<Picks />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;



