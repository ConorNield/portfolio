import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';

const Skills = () => {
    return (
        <section id="skills">
            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: 'mintcream', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2 }}>
                    <strong>Technical Skills & Tools</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.mainSkills} />
                    </Box>

            </Box>

        </section>
    );
}

export default Skills;

