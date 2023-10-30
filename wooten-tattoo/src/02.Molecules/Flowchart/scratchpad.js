// Flowchart.js
import React, { useState, useCallback } from 'react';
import ReactFlow, { addEdge, MiniMap, Background, Handle } from 'reactflow';
import 'reactflow/dist/style.css';

const CircleNode = ({ data }) => {
    console.log("rendering circleNode", data);
    return (
        <>
            <Handle type="target" position="left" />
            <div style={{
                background: 'var(--light)',
                border: '1px solid black', 
                borderRadius: '50%',
                height: '150px', 
                padding: '16px',
                width: '150px' }}>
                {data.label}
            </div>
            <Handle type="source" position="right" />
        </>
    );
};
const RectangleNode = ({ data }) => {
    return (
        <>
            <Handle type="target" position="left" />
            <div style={{ 
                background: 'var(--light)',
                border: '1px solid black', 
                height: '300px', 
                padding: '16px',
                width: '300px' }}>
                {data.label}
            </div>
            <Handle type="source" position="right" />
        </>
    );
};
const PolygonNode = ({ data }) => {
    return (
        <>
            <Handle type="target" position="left" />
            <div style={{
                clipPath: `polygon(
                    0 0,
                    80% 0,
                    100% 20%,
                    100% 100%,
                    40% 100%,
                    0 60%)`,
                background: 'var(--light)',
                border: '1px solid black', 
                height: '300px', 
                padding: '16px',
                width: '300px'  }}>
                {data.label}
            </div>
            <Handle type="source" position="right" />
        </>
    );
};

const nodeTypes = {
    circ: CircleNode, 
    rect: RectangleNode, 
    poly: PolygonNode,
};

const Flowchart = (props) => {
    const defaultNodes = [
        {id: "start", type: 'circ', data: { label: <h4>START</h4> }, position: { x: 0, y: 0 }},
        {id: "ref", type: 'poly', data: { label: <h4>REFERENCE</h4> }, position: { x: 200, y: 0 }},
        {id: "con", type: 'rect', data: { label: <h4>CONSULTATION</h4> }, position: { x: 0, y: 200 }},
        {id: "sil", type: 'rect', data: { label: "SILHOUETTEn...description..." }, position: { x: 0, y: 400 }},
        {id: "var1", type: 'poly', data: { label: "VARIANT 1" }, position: { x: 200, y: 400 }},
        {id: "var2", type: 'poly', data: { label: "VARIANT 2" }, position: { x: 400, y: 400 }},
        {id: "var3", type: 'poly', data: { label: "VARIANT 3" }, position: { x: 600, y: 400 }},
        {id: "renA", type: 'poly', data: { label: "RENDER-An...description..." }, position: { x: 300, y: 600 }},
        {id: "fit", type: 'rect', data: { label: "FITMENTnDesign is...overall impression." }, position: { x: 0, y: 800 }},
        {id: "approve", type: 'poly', data: { label: "APPROVE" }, position: { x: 200, y: 800 }},
        {id: "map", type: 'rect', data: { label: "ANATOMICAL MAPn...description..." }, position: { x: 0, y: 1000 }},
        {id: "renB", type: 'poly', data: { label: "RENDER-Bn...description..." }, position: { x: 200, y: 1000 }},
        {id: "tattoo", type: 'circ', data: { label: "TATTOO" }, position: { x: 100, y: 1200 }}
    ];
    
    const defaultEdges = [
        {id: "e1-2", source: "start", target: "ref"},
        {source: "ref", target: "con"},
        {source: "con", target: "sil"},
        {source: "sil", target: "var1"},
        {source: "sil", target: "var2"},
        {source: "sil", target: "var3"},
        {source: "var1", target: "renA"},
        {source: "var2", target: "renA"},
        {source: "var3", target: "renA"},
        {source: "renA", target: "fit"},
        {source: "fit", target: "approve"},
        {source: "approve", target: "map"},
        {source: "approve", target: "renB"},
        {source: "map", target: "renB"},
        {source: "renB", target: "tattoo"}
    ];

    const [nodes] = useState(defaultNodes);
    const [edges, setEdges] = useState(defaultEdges);

    console.log("Elements to be rendered:", [...nodes, ...edges]);

    return (
        <section id="flowchart" className="number" data-number={props['data-number']}>
            <h2>Madness</h2>
            <h3>Once you've arrived</h3>
            <figure style={{ width: '100%', height: '50vh' }}>

                <ReactFlow
                    elements={[ ...nodes, ...edges ]}
                    nodeTypes={nodeTypes}
                >
                    <MiniMap nodeColor={(node) => {
                        switch (node.type) {
                            case 'input': return '#6ede87';
                            case 'output': return '#6865A5';
                            default: return '#ff0072';
                        }
                    }} />
                    <Background variant="dots" gap={12} size={2} />
                </ReactFlow>

            </figure>
        </section>
    );
}

export default Flowchart;
