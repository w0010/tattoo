// Edges.js
const edges = [
    {id: 'e1', source: 'start', target: 'con', type: 'CustomEdge', animated: true},
    {id: 'e2', source: 'ref', target: 'con', type: 'CustomEdge'},
    {id: 'e3', source: 'con', target: 'sil', type: 'CustomEdge'},
    {id: 'e4', source: 'sil', target: 'var1', type: 'CustomEdge', animated: true},
    {id: 'e5', source: 'sil', target: 'var2', type: 'CustomEdge', animated: true},
    {id: 'e6', source: 'sil', target: 'var3', type: 'CustomEdge', animated: true},
    {id: 'e7', source: 'var1', target: 'renA', type: 'CustomEdge', animated: true},
    {id: 'e9', source: 'var3', target: 'renA', type: 'CustomEdge', animated: true},
    {id: 'e10', source: 'renA', target: 'fit', type: 'CustomEdge'},
    {id: 'e11', source: 'fit', target: 'aprv', type: 'CustomEdge', animated: true},
    {id: 'e13', source: 'aprv', target: 'tattoo', type: 'CustomEdge', data: { label: 'yes' }, animated: true},
    {id: 'e12', source: 'aprv', target: 'map', type: 'CustomEdge', data: { label: 'no' }, animated: true},
    {id: 'e14', source: 'map', target: 'renB', type: 'CustomEdge', animated: true},
    {id: 'e15', source: 'renB', target: 'fit', type: 'CustomEdge', animated: true},
];

export default edges;