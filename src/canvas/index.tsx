import React from 'react';
import { Box } from '@mui/material';

interface CanvasProps {
  points: { id: number, x: number, y: number }[];
  background: string | null;
}

const Canvas: React.FC<CanvasProps> = ({ points, background }) => {
  return (
 <Box
    sx={{
      position: 'relative',
      width: 500,
      height: 500,
      border: '1px solid black',
      margin: '20px auto',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
    }}
    >
      {points.map(point => (
        <Box
          key={point.id}
          role="point"
          aria-label={`point at (${point.x}, ${point.y})`}
          sx={{
            width: 5,
            height: 5,
            backgroundColor: 'red',
            position: 'absolute',
            left: point.x,
            top: point.y,
          }}
        ></Box>
      ))}
    </Box>
  );
}

export default Canvas;
