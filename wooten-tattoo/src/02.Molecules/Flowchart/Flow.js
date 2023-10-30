// Flow.js
import ReactFlow, { 
    Background, 
    MiniMap, 
    Panel,
    useNodesState,
    useEdgesState,
} from 'reactflow';
import { forceSimulation, forceManyBody, forceCenter } from 'd3-force';
import 'reactflow/dist/style.css';

import initialNodes from './Nodes.js';
import initialEdges from './Edges.js'
import { StartNode, RectangleNode, WavyNode, DiamondNode, EndNode } from './CustomNodes.js';
import CustomEdge from './CustomEdge.js';
import { collide } from './collide.js';
import './Flow.css';


const nodeTypes = {
    start: StartNode,
    rectangle: RectangleNode,
    wavy: WavyNode,
    diamond: DiamondNode,
    end: EndNode,
};

const customEdge = { CustomEdge }

const nodeColor = (node) => {
    switch (node.type) {
      case 'input': return '#6ede87';
      case 'output': return '#6865A5';
      default: return '#00ff72';
    };
};



const Flow = (props) => {
    const [nodes] = useNodesState(initialNodes);
    const [edges] = useEdgesState(initialEdges);

    return (
        <section id="flowchart" className="number" data-number={props['data-number']}>
            <h2>Madness</h2>
            <h3>Once you've arrived</h3>
            <figure style={{ width: '100%', height: '50vh' }}>

                <ReactFlow
                    nodeTypes={nodeTypes}
                    edgeTypes={customEdge}
                    nodes={nodes}
                    edges={edges} 
                    fitView
                >
                    <Panel position="top-right">Panel</Panel>
                    <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
                    <Background variant="cross" gap={32} size={14} />
                </ReactFlow>

            </figure>
        </section>
    );
};

export default Flow;
