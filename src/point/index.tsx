import React, { useState } from 'react';
import { ListItem, ListItemText, TextField, Button, Box } from '@mui/material';

interface PointItemProps {
  point: { id: number, x: number, y: number };
  updatePoint: (id: number, newX: number, newY: number) => void;
  deletePoint: (id: number) => void;
}

const PointItem: React.FC<PointItemProps> = ({ point, updatePoint, deletePoint }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [x, setX] = useState(point.x);
  const [y, setY] = useState(point.y);

  const saveEdit = () => {
    if (!isNaN(Number(x)) && !isNaN(Number(y))) {
      updatePoint(point.id, Number(x), Number(y));
      setIsEditing(false);
    } else {
      alert('Coordinates must be numbers');
    }
  };

  return (
    <ListItem>
      {isEditing ? (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="X"
            value={x}
            onChange={e => setX(Number(e.target.value))}
            size="small"
            variant="outlined"
            type="number"
          />
          <TextField
            label="Y"
            value={y}
            onChange={e => setY(Number(e.target.value))}
            size="small"
            variant="outlined"
            type="number"
            sx={{ mx: 2 }}
          />
          <Button variant="contained" onClick={saveEdit}>Save</Button>
        </Box>
      ) : (
        <>
          <ListItemText primary={`(${point.x}, ${point.y})`} />
          <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
        </>
      )}
      <Button
        variant="contained"
        color="error"
        onClick={() => deletePoint(point.id)}
        >Delete
      </Button>
    </ListItem>
  );
}

export default PointItem;
