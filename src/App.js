import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
import Picks from './assets/configs/NBA_Picks.csv'
import './App.css';
import WorkTimeline from './assets/configs/timelineConfig.js';
import { useEffect } from 'react';
import React from 'react';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

//function usePageViews() {
    //const location = useLocation();

    //useEffect(() => {
        //ReactGA.pageview(location.pathname + location.search);
    //}, [location]);
//}

function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-HY9FBXSN4P";
        script.async = true;
        document.head.appendChild(script);

        const scriptContent = document.createElement('script');
        scriptContent.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HY9FBXSN4P');
        `;
        document.head.appendChild(scriptContent);
    }, []); // Empty dependency array ensures this runs once on component mount
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
                        <Route path="/blogs/batting-order-optimization" exact element={<BattingOrderBlog />} />
                        <Route path="/blogs/corn-yield" exact element={<Stat429FinalProject />} />
                        <Route path="/blogs/soybean-garch" exact element={<SoybeanGARCH />} />
                        <Route path="/blogs/NBA" exact element={<Lottery />} />
                        <Route path="/blogs/NBA/Picks" exact element={<Picks />} />
                        <Route path="/timeline" exact element={<WorkTimeline />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;

