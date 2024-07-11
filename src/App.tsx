import React, { useState } from 'react';
import { Box, Button, CssBaseline, Container, Typography } from '@mui/material';
import Canvas from './canvas';
import PointList from './point/PointList';
import AddPointButton from './point/AddPointButton';

interface Point {
  id: number;
  x: number;
  y: number;
}

const App: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [background, setBackground] = useState<string | null>(null);

  const addPoint = () => {
    const newPoint: Point = { id: Date.now(), x: 0, y: 0 };
    setPoints([...points, newPoint]);
  };

  const updatePoint = (id: number, newX: number, newY: number) => {
    setPoints(points.map(point => (point.id === id ? { ...point, x: newX, y: newY } : point)));
  };

  const deletePoint = (id: number) => {
    setPoints(points.filter(point => point.id !== id));
  };

  const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackground(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setBackground(null)
  };

  return (
    <Container>
      <CssBaseline />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Canvas Drawing App
        </Typography>
        <AddPointButton addPoint={addPoint} />
        <Button variant="contained" component="label">
          {background ? 'Replace Background' : 'Upload Background'}
          <input type="file" hidden onChange={handleBackgroundChange} />
        </Button>
        {background ? (
          <Button variant="contained" onClick={handleDelete} component="label">Delete</Button>
        ) : null}
        <Canvas points={points} background={background} />
        <PointList points={points} updatePoint={updatePoint} deletePoint={deletePoint} />
      </Box>
    </Container>
  );
}

export default App;
