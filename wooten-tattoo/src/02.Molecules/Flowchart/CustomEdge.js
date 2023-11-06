// CustomEdge.js
import React from 'react';
import './CustomEdge.css';

const CustomEdge = ({ sourceX, sourceY, targetX, targetY }) => {
    const verticalMidpoint = (sourceY + targetY) / 2;
    const horizontalDistance = Math.abs(targetX - sourceX);
    const verticalDistance = Math.abs(targetY - sourceY);

    // Calculate dynamic bevel offset
    const maxBevelOffset = 24;
    const actualBevelOffsetX = Math.min(maxBevelOffset, horizontalDistance / 2);
    const actualBevelOffsetY = Math.min(maxBevelOffset, verticalDistance / 2);



    const firstBevelX = targetX < sourceX ? sourceX - actualBevelOffsetX : sourceX + actualBevelOffsetX;
    const secondBevelX = targetX < sourceX ? targetX + actualBevelOffsetX : targetX - actualBevelOffsetX;
    const firstBevelY = sourceY < verticalMidpoint ? verticalMidpoint - actualBevelOffsetY : verticalMidpoint + actualBevelOffsetY;
    const secondBevelY = sourceY < targetY ? verticalMidpoint + actualBevelOffsetY : verticalMidpoint - actualBevelOffsetY;
    
    let svgPath;

    if (sourceY === targetY) {
        svgPath = `M ${sourceX} ${sourceY} H ${targetX}`;
    } else if (sourceX === targetX) {
        svgPath = `M ${sourceX} ${sourceY} V ${targetY}`;
    } else {
        svgPath = `
            M ${sourceX} ${sourceY}
            L ${sourceX} ${firstBevelY}
            L ${firstBevelX} ${verticalMidpoint}
            L ${secondBevelX} ${verticalMidpoint}
            L ${targetX} ${secondBevelY}
            L ${targetX} ${targetY}
        `;
    }
    

    return (
        <path
            d={svgPath}
            fill="none"
            style={{
                stroke: 'var(--white)',
                strokeWidth: '2px',
            }}
        />
    );
};

export default CustomEdge;
