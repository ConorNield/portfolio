import React from 'react';
import { Container, Grid2, Box, Typography } from '@mui/material';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';

const Home = () => {
    return (
        <section>
            <Container maxWidth="xl" className="home-content" id="home">
                <Grid2 container justifyContent="center" alignItems="center" className="home-header">
                    <Grid2 item xs={12} style={{ textAlign: 'center' }}>
                        <Typography variant="h1" sx={{ color: '#f5f5f5', fontSize: '3em' }}>
                            {homeConfig.greeting}
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <About about={homeConfig.about} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
            <Container maxWidth="xl" className="resume-content" id="resume" sx={{ mt: 6 }}>
                <Box sx={{ width: '100%', maxWidth: '960px', mx: 'auto' }}>
                    <Timeline items={homeConfig.workTimeline} />
                </Box>
            </Container>
            <Container>
                <Typography variant="body1" sx={{ color: '#f5f5f5', fontSize: '1em' }}>
                    {homeConfig.source}
                </Typography>
            </Container>
        </section>
    );
}

export default Home;
