import React, { useEffect, useState } from "react";

function GraphOneAnimated({ selectedPath, previousPath }) {
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
  ]

  const paths = [
    [[0, 0], [1, 2], [3, 10], [18, 48], [19, 36], [20, 35], [21, undefined]],
    [[0, 0], [1, 3], [4, 11], [29, 26], [23, 34], [20, 35], [21, undefined]],
    [[0, 0], [1, 3], [4, 11], [29, 26], [23, 34], [20, 35], [21, undefined]]
  ]
  useEffect(() => {
    const path = paths[selectedPath];
    const prevPath = paths[previousPath];

    for (let i in prevPath) {
      var previousNode = document.getElementsByClassName(`node graph-1 _${prevPath[i][0]}`)[1];
      var previousEdge = document.getElementsByClassName(`edge graph-1 _${prevPath[i][1]}`)[1];
      
      if (previousNode) {
        previousNode.classList.remove(`path-colour-${previousPath}`);
      }

      if (previousEdge) {
        previousEdge.classList.remove(`path-colour-${previousPath}`);
      }
    }
  
    for (let i in path) {
      setTimeout(() => {
        var node = document.getElementsByClassName(`node graph-1 _${path[i][0]}`)[1];
        if (node) {
          node.classList.add(`path-colour-${selectedPath}`);
        }
      }, 500 + i * 400); 
  
      setTimeout(() => {
        if (path[i][1] != undefined) {
          var edge = document.getElementsByClassName(`edge graph-1 _${path[i][1]}`)[1];
          if (edge) {
            edge.classList.add(`path-colour-${selectedPath}`);
          }
        }
      }, 500 + i * 400);
    }
  }, [selectedPath]);

  return (
    <div className="graph-1">
      {nodes.map((val, index) => <div key={index} className={`node graph-1 ${val}`}></div>)}
      {edges.map((val, index) => <div key={index} className={`edge graph-1 ${val}`}><span className={`edge-label _${val}_`}>{/* distances[Number(val.slice(1,val.length))] */}</span></div>)}
    </div>
  )
}

export default GraphOneAnimated;