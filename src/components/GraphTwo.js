import React, { useEffect, useState } from "react";

function GraphTwo({ selectedPath, previousPath }) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  
  useEffect(() => {
    setNodes([...Array(27)].map((x, i) => `_0${i}`));
    setEdges([...Array(55)].map((x, i) => `_0${i}`));  
  }, []);

  const paths = [
    [[0, 2], [3, 12], [7, 19], [12, 36], [18, 44], [24, 53], [26, undefined]],
    [[0, 0], [1, 15], [10, 29], [15, 41], [17, 42], [23, 51], [26, undefined]],
    [[0, 2], [3, 12], [7, 19], [12, 36], [18, 44], [24, 53], [26, undefined]]
  ]
  useEffect(() => {
    const path = paths[selectedPath];
    const prevPath = paths[previousPath];

    for (let i in prevPath) {
      var previousNode = document.getElementsByClassName(`node graph-2 _0${prevPath[i][0]}`)[0];
      var previousEdge = document.getElementsByClassName(`edge graph-2 _0${prevPath[i][1]}`)[0];
      
      if (previousNode) {
        previousNode.classList.remove(`path-colour-${previousPath}`);
      }

      if (previousEdge) {
        previousEdge.classList.remove(`path-colour-${previousPath}`);
      }
    }
  
    for (let i in path) {
      setTimeout(() => {
        var node = document.getElementsByClassName(`node graph-2 _0${path[i][0]}`)[0];
        if (node) {
          node.classList.add(`path-colour-${selectedPath}`);
        }
      }, 500 + i * 400); 
  
      setTimeout(() => {
        if (path[i][1] != undefined) {
          var edge = document.getElementsByClassName(`edge graph-2 _0${path[i][1]}`)[0];
          if (edge) {
            edge.classList.add(`path-colour-${selectedPath}`);
          }
        }
      }, 500 + i * 400);
    }
  }, [selectedPath]);

  return (
    <div className="graph-2">
      {nodes.map((val, index) => <div key={index} className={`node graph-2 ${val}`}></div>)}
      {edges.map((val, index) => <div key={index} className={`edge graph-2 ${val}`}><span className={`edge-label ${val}_`}>{/*val.slice(2,val.length)*/}</span></div>)}
    </div>
  )
}

export default GraphTwo;