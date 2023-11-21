import React, { useEffect, useState } from "react";

function GraphOne() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  
  useEffect(() => {
    setNodes([...Array(33)].map((x, i) => `_${i}`));
    setEdges([...Array(59)].map((x, i) => `_${i}`));  
  }, []);

  return (
    <div className="graph-1">
      {nodes.map((val, index) => <div key={index} className={`node graph-1 ${val}`}></div>)}
      {edges.map((val, index) => <div key={index} className={`edge graph-1 ${val}`}><span className="edge-label"></span></div>)}
    </div>
  )
}

export default GraphOne;