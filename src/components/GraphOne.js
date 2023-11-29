import React, { useEffect, useState } from "react";

function GraphOne({ selectedWeights }) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  
  useEffect(() => {
    setNodes([...Array(33)].map((x, i) => `_${i}`));
    setEdges([...Array(59)].map((x, i) => `_${i}`));  
  }, []);

 const distances = [
    3,
    4.5,
    4,
    4.5,
    9.5,
    13,
    1.5,
    2.5,
    8.75,
    5,
    4.5,
    5,
    4.5,
    5,
    4.5,
    2.5,
    4,
    4.5,
    4,
    5,
    2,
    2.5,
    3,
    4.5,
    5,
    4,
    5.5,
    4.5,
    3.5,
    4.5,
    7,
    2.5,
    4.75,
    6,
    4.5,
    1.75,
    3.75,
    2,
    6.25,
    8.5,
    4.5,
    4.25,
    5,
    3,
    2.5,
    2,
    5.5,
    5.5,
    5,
    4.5,
    4,
    4.5,
    4.5,
    4,
    5,
    3,
    4,
    4.5
  ];

  const risk = [
    0,
    3,
    4,
    3,
    2,
    2,
    4,
    4,
    2.5,
    3.5,
    4,
    3.5,
    2.5,
    3,
    2,
    2,
    2,
    2,
    2,
    2.5,
    2,
    2.5,
    2,
    3,
    4,
    4,
    3.5,
    2.5,
    2,
    2,
    2,
    2.5,
    3,
    3,
    3.5,
    0,
    4,
    4,
    4,
    4,
    3.5,
    3,
    3,
    2,
    2,
    2.5,
    3,
    3.5,
    4,
    2.5,
    2,
    2,
    3,
    2,
    2.5,
    2,
    2,
    2,
    2
  ];

  return (
    <div className="graph-1">
      {nodes.map((val, index) => <div key={index} className={`node graph-1 ${val}`}></div>)}
      {edges.map((val, index) => <div key={index} className={`edge graph-1 ${val}`}><span className={`edge-label _${val}_`}>{selectedWeights? risk[Number(val.slice(1,val.length))] : distances[Number(val.slice(1,val.length))]}</span></div>)}
    </div>
  )
}

export default GraphOne;