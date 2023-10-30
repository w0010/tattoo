// CustomEdge.js
import React from 'react';
import './CustomEdge.css';

const CustomEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
}) => {
    const midY = (sourceY + targetY) / 2;
  
    const path = `
      M${sourceX},${sourceY}
      V${midY}
      H${targetX}
      V${targetY}
    `;
  return (
    <path d={path} fill="none" style={{
        stroke: 'var(--white)',
        strokeWidth: '4px',
    }} />
  );
};

export default CustomEdge;