import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function RotatedText(props: { text: string }) {
    return (
        <Box 
        sx={{
          color:'white',
          margin: 0, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '200px',
          height: '600px', // Set height to help with centering after rotation
        }}
      >
        <Typography
          variant="h4"
          sx={{
            transform: 'rotate(270deg)',
            transformOrigin: 'center center', // Adjusted transform origin for better centering
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textAlign: 'center', // Ensures the text is centered within its box
          }}
        >
          {props.text}
        </Typography>
      </Box>
      
    );
}
