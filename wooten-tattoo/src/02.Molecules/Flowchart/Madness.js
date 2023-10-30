// Flow.js (line 1)
import { forceSimulation, forceLink, forceManyBody, forceX, forceY } from 'd3-force';
import React, { useMemo } from 'react';
import ReactFlow, {
    Panel,
    useNodesState,
    useEdgesState,
    useReactFlow,
    useStore,
    ReactFlowProvider,
} from 'reactflow';

import { collide } from './Collide.js';
import initialNodes from './Nodes.js';
import initialEdges from './Edges.js'
import CustomEdge from './CustomEdge.js';
import { 
    StartNode, 
    RectangleNode, 
    WavyNode,
    DiamondNode, 
    EndNode,
} from './CustomNodes.js';

import 'reactflow/dist/style.css';
import './Flow.css';









const simulation = forceSimulation()
  .force('charge', forceManyBody().strength(-1000))
  .force('x', forceX().x(0).strength(0.03))
  .force('y', forceY().y(0).strength(0.03))
  .force('collide', collide())
  .alphaTarget(0.05)
  .stop();

  const useLayoutedElements = () => {
    const { getNodes, setNodes, getEdges, fitView } = useReactFlow();
    const initialised = useStore((store) =>
      [...store.nodeInternals.values()].every((node) => node.width && node.height)
    );
  
    return useMemo(() => {
      let nodes = getNodes().map((node) => ({ ...node, x: node.position.x, y: node.position.y }));
      let edges = getEdges().map((edge) => edge);
      let running = false;
  
      // If React Flow hasn't initialised our nodes with a width and height yet, or
      // if there are no nodes in the flow, then we can't run the simulation!
      if (!initialised || nodes.length === 0) return [false, {}];
  
      simulation.nodes(nodes).force(
        'link',
        forceLink(edges)
          .id((d) => d.id)
          .strength(1)
          .distance(350)
      );
  
      // The tick function is called every animation frame while the simulation is
      // running and progresses the simulation one step forward each time.
      const tick = () => {
        getNodes().forEach((node, i) => {
          const dragging = Boolean(document.querySelector(`[data-id="${node.id}"].dragging`));
  
          // Setting the fx/fy properties of a node tells the simulation to "fix"
          // the node at that position and ignore any forces that would normally
          // cause it to move.
          nodes[i].fx = dragging ? node.position.x : null;
          nodes[i].fy = dragging ? node.position.y : null;
        });
  
        simulation.tick();
        setNodes(nodes.map((node) => ({ ...node, position: { x: node.x, y: node.y } })));
  
        window.requestAnimationFrame(() => {
          // Give React and React Flow a chance to update and render the new node
          // positions before we fit the viewport to the new layout.
          fitView();
  
          // If the simulation hasn't be stopped, schedule another tick.
          if (running) tick();
        });
      };
  
      const toggle = () => {
        running = !running;
        running && window.requestAnimationFrame(tick);
      };
  
      const isRunning = () => running;
  
      return [true, { toggle, isRunning }];
    }, [initialised, fitView, getEdges, getNodes, setNodes]);
  };

  










const nodeTypes = {
    start: StartNode,
    rectangle: RectangleNode,
    wavy: WavyNode,
    diamond: DiamondNode,
    end: EndNode,
};

const customEdge = { CustomEdge }







const noAttribution = { hideAttribution: true };

const Flow = (props) => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);
    const [initialised, { toggle, isRunning }] = useLayoutedElements();

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
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodesDraggable
                    proOptions={noAttribution}
                    fitView
                >
                    <Panel>
                        {initialised && (
                            <button onClick={toggle}>{isRunning() ? 'Stop' : 'Start'} force simulation</button>
                        )}
                    </Panel>
                </ReactFlow>

            </figure>
        </section>
    );
};




const Madness = () => {
  return (
    <ReactFlowProvider>
        <Flow />
    </ReactFlowProvider>
);
}

export default Madness;