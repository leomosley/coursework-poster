import React, { useEffect, useState } from "react";

function GraphTwo() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  
  useEffect(() => {
    setNodes([...Array(27)].map((x, i) => `_0${i}`));
    setEdges([...Array(55)].map((x, i) => `_0${i}`));  
  }, []);

  return (
    <div className="graph-2">
      {nodes.map((val, index) => <div key={index} className={`node graph-2 ${val}`}></div>)}
      {edges.map((val, index) => <div key={index} className={`edge graph-2 ${val}`}><span className={`edge-label ${val}_`}>{val}</span></div>)}
    </div>
  )
}

export default GraphTwo;