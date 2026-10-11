import React from 'react';

// Decorative "community graph" for the hero, a nod to social network analysis (Gephi-style modularity colours).
// Generated once from a fixed seed so it looks the same on every visit.

function mulberry32(seed) {
  return function next() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const WIDTH = 520;
const HEIGHT = 440;
const CENTERS = [
  { x: 150, y: 150, spread: 85, count: 16 },
  { x: 370, y: 130, spread: 75, count: 13 },
  { x: 270, y: 330, spread: 90, count: 15 },
];

function buildGraph() {
  const rand = mulberry32(2026);
  const nodes = [];
  CENTERS.forEach((c, group) => {
    for (let i = 0; i < c.count; i++) {
      const angle = rand() * Math.PI * 2;
      const dist = Math.sqrt(rand()) * c.spread;
      nodes.push({ id: nodes.length, group, x: c.x + Math.cos(angle) * dist, y: c.y + Math.sin(angle) * dist, degree: 0 });
    }
  });

  const edges = [];
  const seen = new Set();
  const addEdge = (a, b) => {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (a === b || seen.has(key)) return;
    seen.add(key);
    edges.push({ a, b, bridge: nodes[a].group !== nodes[b].group });
    nodes[a].degree++;
    nodes[b].degree++;
  };

  // Connect every node to its two nearest neighbours in the same community
  nodes.forEach((n) => {
    nodes
      .filter((m) => m.group === n.group && m.id !== n.id)
      .map((m) => ({ m, d: Math.hypot(m.x - n.x, m.y - n.y) }))
      .sort((p, q) => p.d - q.d)
      .slice(0, 2)
      .forEach(({ m }) => addEdge(n.id, m.id));
  });

  // A few weak ties between communities
  [[0, 1], [0, 2], [1, 2], [0, 2], [1, 2]].forEach(([g1, g2]) => {
    const a = nodes.filter((n) => n.group === g1);
    const b = nodes.filter((n) => n.group === g2);
    addEdge(a[Math.floor(rand() * a.length)].id, b[Math.floor(rand() * b.length)].id);
  });

  return { nodes, edges };
}

const { nodes, edges } = buildGraph();

function NetworkGraph() {
  return (
    <svg className="network" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden="true" focusable="false">
      <g className="network-edges">
        {edges.map((e, i) => (
          <line
            key={`${e.a}-${e.b}`}
            x1={nodes[e.a].x}
            y1={nodes[e.a].y}
            x2={nodes[e.b].x}
            y2={nodes[e.b].y}
            className={e.bridge ? 'edge edge-bridge' : 'edge'}
            style={{ '--d': `${(i % 20) * 60}ms` }}
          />
        ))}
      </g>
      <g className="network-nodes">
        {nodes.map((n) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={2.5 + n.degree * 1.1}
            className={`node node-g${n.group}`}
            style={{ '--d': `${(n.id % 12) * 0.45}s` }}
          />
        ))}
      </g>
    </svg>
  );
}

export default NetworkGraph;
