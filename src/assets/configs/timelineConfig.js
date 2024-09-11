import React from 'react';
import { Container, Box } from '@mui/material';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';

const WorkTimeline = () => {
    return (
        <section>
            <Container maxWidth="xl" className="resume-content" id="resume" sx={{ mt: 6 }}>
                <Box sx={{ width: '100%', maxWidth: '960px', mx: 'auto' }}>
                    
                    <Timeline items={homeConfig.workTimeline} />
                </Box>
            </Container>
        </section>
    );
}

export default WorkTimeline;

