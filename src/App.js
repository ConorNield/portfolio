import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import Footer from './components/Footer/Footer';
import BattingOrderBlog from "./assets/configs/battingOrderBlog.js"
import Stat429FinalProject from './assets/configs/cornYieldPrediction.js';
import SoybeanGARCH from './assets/configs/soybeanGARCH.js';
import Lottery from './assets/configs/NBALottery.js';
import './App.css';

import React from 'react';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Router>
                <NavBar />
                <Container sx={{ flex: 1, py: 3 }}>
                    <Routes>
                        <Route path="/portfolio" exact element={<Home />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/blogs" exact element={<Blogs />} />
                        <Route path="/skills" exact element={<Skills />} />
                        <Route path="/portfolio/blogs/batting-order-optimization" exact element={<BattingOrderBlog />} />
                        <Route path="/portfolio/blogs/corn-yield" exact element={<Stat429FinalProject />} />
                        <Route path="/portfolio/blogs/soybean-garch" exact element={<SoybeanGARCH />} />
                        <Route path="/portfolio/blogs/NBA" exact element={<Lottery />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;



