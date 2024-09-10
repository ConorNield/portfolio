import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box 
      id="about" 
      sx={{ 
        my: 4, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'mintcream',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: 'auto',
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          fontSize: '1rem', 
          lineHeight: '1.6', 
          color: '#333', 
          textAlign: 'left' 
        }}
      >
        Hi, I'm Conor, and welcome to my portfolio website. <br/>
        I have always been a huge nerd when it comes to data, and I am looking to pursue a career involving data <br/>
        I am a detail-oriented and analytical statistics major with hands-on experience in data analysis, front-end development, and financial oversight. <br/>
        I have a proven ability to lead data-driven projects in both startup and academic environments, with expertise in statistical modeling, R programming, and data visualization. <br/>
        I am seeking a full-time entry-level data analyst position to apply my strong problem-solving skills and passion for data to generate impactful insights post-graduation.
      </Typography>
    </Box>
  );
};

export default About;


