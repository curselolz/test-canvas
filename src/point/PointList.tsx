import React from 'react';
import { List } from '@mui/material';
import PointItem from '../point';

interface PointListProps {
  points: { id: number, x: number, y: number }[];
  updatePoint: (id: number, newX: number, newY: number) => void;
  deletePoint: (id: number) => void;
}


const PointList: React.FC<PointListProps> = ({ points, updatePoint, deletePoint }) => {
  return (
    <List sx={{ padding: 0 }}>
      {points.map(point => (
        <PointItem
          key={point.id}
          point={point}
          updatePoint={updatePoint}
          deletePoint={deletePoint}
        />
      ))}
    </List>
  );
}

export default PointList;
