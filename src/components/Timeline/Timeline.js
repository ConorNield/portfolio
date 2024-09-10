import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import Tags from '../Tags/Tags';

const CustomTimeline = (props) => {
    const { items } = props || {};

    return (
        <Timeline position="alternate">
            {items.map((item, index) => {
                const { id, date, location, icon, title, company, description, tags } = item || {};
                const isLeftSide = index % 2 !== 0;  // Determine if the item is on the left side

                return (
                    <TimelineItem key={id}>
                        <TimelineOppositeContent
                            sx={{ 
                                m: 'auto 0',
                                textAlign: isLeftSide ? 'right' : 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: isLeftSide ? 'flex-end' : 'flex-start'
                            }} // Adjust alignment
                        >
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                {date}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                {location}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{
                                    backgroundColor: 'black',
                                    width: 25,
                                    height: 25,
                                    border: '2px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box sx={{ fontSize: '24px', color: 'mintcream' }}>
                                    {icon}
                                </Box>
                            </TimelineDot>
                            <TimelineConnector sx={{ backgroundColor: '#263238' }} />
                        </TimelineSeparator>
                        <TimelineContent
                            sx={{
                                py: '12px',
                                px: 2,
                                textAlign: 'left', // Always align text to the left
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',  // Align content to the start of the container
                                justifyContent: 'center'
                            }}
                        >
                            <Paper
                                elevation={2}
                                sx={{
                                    p: 2,
                                    background: 'mintcream',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                    }
                                }}
                            >
                                <Typography variant="h5" component="h1" sx={{ color: '#263238', textAlign: 'center', mb: 1, fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}>
                                    {title}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ fontSize: '15px', textAlign: 'center', fontFamily: 'Open Sans, sans-serif', color: 'gray' }}>
                                    {company}
                                </Typography>
                                {description.map((line, idx) => (
                                    <Typography key={idx} variant="body1" sx={{ mb: 2, fontFamily: 'Open Sans, sans-serif', color: '#424242', textAlign: 'left' }}>
                                        {line}
                                    </Typography>
                                ))}
                                <Tags id={id} tags={tags} />
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </Timeline>
    );
};

export default CustomTimeline;




