import React from 'react';
import Button from '@mui/material/Button';

interface AddPointButtonProps {
  addPoint: () => void;
}

const AddPointButton: React.FC<AddPointButtonProps> = ({ addPoint }) => {
  return <Button onClick={addPoint}>Create Point</Button>;
}

export default AddPointButton;
