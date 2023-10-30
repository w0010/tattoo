// CustomNodes.js
import { Handle, Position } from 'reactflow';
import './CustomNodes.css';


// Base styles
const baseStyles = {
    background: 'var(--white)',
    display: 'flex',
    maxWidth: '70vw',
    padding: '16px',
};  
const circleStyles = {
    alignItems: 'center',
    aspectRatio: '1 / 1',
    borderRadius: '50%',
};
const angularStyles = {
    aspectRatio: '1 / 1', 
};

const StartNode = ({ data }) => (
    <div style={{ ...baseStyles, ...circleStyles }}>
        {data.label}
        <Handle type="source" position={Position.Right} />
    </div>
);
const EndNode = ({ data }) => (
    <div style={{ ...baseStyles, ...circleStyles }}>
        <Handle type="target" position={Position.Top} />
        {data.label}
    </div>
);

// Rectangle
const RectangleNode = ({ data }) => (
    <div style={{ ...baseStyles }}>
        <Handle type="target" position={Position.Top} />
        {data.label}
        <Handle type="source" position={Position.Bottom} />
    </div>
);

// Wavy Rectangle (just an example, you may need a SVG or some CSS trick to get the wavy effect)
const WavyNode = ({ data }) => (
    <div style={{ 
        ...baseStyles,
        ...angularStyles,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%)', 
    }}
    >
        <Handle type="target" position={Position.Top} />
        {data.label}
        <Handle type="source" position={Position.Bottom} />
    </div>
);

// Diamond (using CSS transform rotate)
const DiamondNode = ({ data }) => (
    <div style={{
        alignItems: 'center',
        ...baseStyles,
        ...angularStyles,
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
        {data.label}
        <Handle type="target" position={Position.Top} />
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
        <Handle type="source" position={Position.Bottom} />
    </div>
);

export {
    StartNode,
    EndNode,
    RectangleNode,
    WavyNode,
    DiamondNode
};