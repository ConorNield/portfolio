import React from 'react';
import { Container, Grid2, Box, Typography } from '@mui/material';
import About from '../../components/About';
import homeConfig from '../../assets/configs/homeConfig';
<meta name="google-site-verification" content="L93EB3gGDU1QBIhoJy6pgnZ-iaBdJ2w8cOHCLGMfVbM" />

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
            <Container>
                <Typography variant="body1" sx={{ color: '#f5f5f5', fontSize: '1em' }}>
                    {homeConfig.contact}
                </Typography>
            </Container>
        </section>
    );
}

export default Home;
