// Nodes.js
const nodes = [
    {
        id: 'start',
        data: { label: 
            <div>
                <h4>Start</h4>
            </div> }, 
        position: { x: 0, y: 0 },
        type: 'start',
    },
    {
        id: 'ref',
        data: { label:
            <div>
                <h4>Reference</h4>
            </div> }, 
        position: { x: 100, y: 300 },
        type: 'wavy',
    },
    {
        id: 'con', 
        data: { label: 
            <div>
                <h4>Consultation</h4>
                <p>Goals and reference exchange.</p>
            </div> }, 
        position: { x: 0, y: 550 },
        type: 'rectangle',
    },
    {
        id: 'sil',
        data: { label: 
        <div>
            <h4>Silhouette</h4>
            <p>
                A ratio of darkness is decided, and raw compositions are explored over a photo or directly onto the body with a marker.
                The goal is to use very simple shapes to establish flow and to explore all possibilities.
                This is the equivalent of gesture drawing, the critical first step to an energetic finished work.
                It is rough, and raw.
            </p>
        </div> }, 
        position: { x: 0, y: 700 },
        type: 'rectangle',
    },
    {
        id: 'var1',
        data: { label: 
            <div>
                <h4>Variant 01</h4>
            </div> }, 
        position: { x: -200, y: 1000 },
        type: 'wavy',
    },
    {
        id: 'var2',
        data: { label: 
            <div>
                <h4>Variant 02</h4>
            </div> }, 
        position: { x: 0, y: 1000 },
        type: 'wavy',
    },
    {
        id: 'var3',
        data: { label: 
            <div>
               <h4>Variant 03</h4>
            </div> }, 
        position: { x: 200, y: 1000 },
        type: 'wavy',
    },
    {
        id: 'renA',
        data: { label: 
        <div>
            <h4>Render A</h4>
            <p>description</p>
        </div> }, 
        position: { x: 0, y: 1300 },
        type: 'rectangle',
    },
    {
        id: 'fit',
        data: { label: 
        <div>
            <h4>Fitment</h4>
            <p>description</p>
        </div> }, 
        position: { x: 0, y: 1500 },
        type: 'rectangle',
    },
    {
        id: 'aprv',
        data: { label: 
            <div>
                <h4>Approve</h4>
            </div> }, 
        position: { x: 200, y: 1500 },
        type: 'diamond',
    },
    {
        id: 'map',
        data: { label: 
            <div>
                <h4>Anatomical map</h4>
                <p>description</p>
            </div> }, 
        position: { x: 0, y: 1700 },
        type: 'rectangle',
    },
    {
        id: 'renB',
        data: { label: 
            <div>
                <h4>Render B</h4>
                <p>description</p>
            </div> }, 
        position: { x: 200, y: 2000 },
        type: 'rectangle',
    },
    {
        id: 'tattoo',
        data: { label: 
            <div>
                <h4>Tattoo</h4>
            </div> }, 
        position: { x: 100, y: 2300 },
        type: 'end',
    },
];

export default nodes;