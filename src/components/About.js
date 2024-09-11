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
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: 'auto',
        backgroundColor: '#ffffff',  /* Set this to white or remove */
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          fontSize: '1rem', 
          lineHeight: '1.6', 
          backgroundColor: '#ffffff', /* Set this to white or remove */
          color: '#333', 
          textAlign: 'left' 
        }}
      >
        Welcome to my portfolio website! I have always been passionate about uncovering insights from data, and through my coursework, work experience, and independent projects, I have developed a strong foundation in data analytics, statistical modeling, and data visualization. <br /> <br />
        I have hands-on experience with statistical tools like R and Python. Additionally, I am proficient in SQL for database management, Excel for data visualization, Java script for web development, and Tableau for creating interactive dashboards. <br /> <br />
        As I look toward the future, I am eager to bring my analytical skills to an innovative organization where I can continue to drive data-informed decisions and contribute to meaningful outcomes. I’m particularly excited about roles in a business, or technology context, where I can apply my statistical expertise and analytical mindset to solve real-world challenges. <br /> <br />
        Feel free to browse through my projects and work experience using the menu above. If you’d like to connect, collaborate or discuss potential opportunities, don’t hesitate to reach out to me via email linked below. <br />

      </Typography>
    </Box>
  );
};

export default About;



