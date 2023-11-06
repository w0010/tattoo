// CustomNodes.js (this is line 1)
import { Handle, Position } from 'reactflow';
import './CustomNodes.css';

const StartNode = ({ data }) => (
    <div className='circle node'>
        {data.label}
        <Handle type="source" position={Position.Right} />
    </div>
);

const BasicNode = ({ data }) => (
    <div className='basic node'>
        <Handle type="target" position={Position.Top} />
        {data.label}
        <Handle type="source" position={Position.Bottom} />
    </div>
);

const WavyNode = ({ data }) => (
    <div className="wavy node">
        {data.label}
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
    </div>
);

const DiamondNode = ({ data }) => (
    <div className="diamond node">
        {data.label}
        <Handle type="target" position={Position.Top} />
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
        <Handle type="source" position={Position.Bottom} />
    </div>
);

const EndNode = ({ data }) => (
    <div className='circle node'>
        <Handle type="target" position={Position.Top} />
        {data.label}
    </div>
);

export {
    StartNode,
    BasicNode,
    WavyNode,
    DiamondNode,
    EndNode,
};