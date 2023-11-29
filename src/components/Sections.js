import React, { useState, useEffect } from 'react';
import { icons } from "../constants";

// Components
import GraphOne from './GraphOne';
import GraphTwo from "./GraphTwo";
import GraphOneAnimated from './GraphOneAnimated';

function Sections() {
  const SectionOne = () => {
    const [active, setActive] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      const handleHover = () => {
        setHovered(true);
        setActive(true);
      }
      document.getElementById("ghp-text").addEventListener("mouseenter", handleHover);
      return () => {
        document.getElementById("ghp-text").addEventListener("mouseenter", handleHover);
      };
    }, []);

    useEffect(() => {
      const handleHover = () => {
        setHovered(false);
        if (document.querySelector(".text-box.ghp:hover")) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
      document.getElementById("ghp-text").addEventListener("mouseleave", handleHover);
      return () => {
        document.getElementById("ghp-text").removeEventListener("mouseleave", handleHover);
      };
    }, []);
    
    useEffect(() => {
      const handleHover = () => {
        if (hovered) {
          setActive(true);
        }
      }
      document.getElementById("ghp-text-box").addEventListener("mouseenter", handleHover);
      return () => {
        document.getElementById("ghp-text").removeEventListener("mouseenter", handleHover);
      };
    }, []);

    useEffect(() => {
      const handleHover = () => {
        if (!hovered) {
          setActive(false);
        }
      }
      document.getElementById("ghp-text-box").addEventListener("mouseleave", handleHover);
      return () => {
        document.getElementById("ghp-text-box").removeEventListener("mouseleave", handleHover);
      };
    }, []);

    return (
      <>
      <div id="ghp-text-box" className={`text-box ghp ${active? "active" : ""}`}>
        <p className="section-text main tb">The greatest happiness principle (GHP) holds that we should pursue actions that produce the greatest amount of overall happiness in the world, not just maximize our own happiness ("J. S. Mill's Utilitarianism," n.d.). <a className="section-text main url" target="_blank" href="https://philife.nd.edu/j-s-mills-utilitarianism-promote-the-most-happiness/#:~:text=The%20greatest%20happiness%20principle%20(GHP,just%20maximize%20our%20own%20happiness.">More...</a></p>
      </div>
      <div className="section-1">
        <p className="section-text title">Selecting an Ethical Framework</p>
        <p className="section-text main"><b>Utilitarianism</b> is my chosen ethical framework for measuring risk - its fundamental principle is providing the most utility to the largest number of people. </p>
        <p className="section-text main">In this scenario largest number of people are pedestrians and the passengers of other vehicles. Following the <strong id="ghp-text">Greatest Happiness Principle</strong>, they are who should be provided the most utility.</p>
        <p className="section-text main">Within this context utility can be defined as minimising negative impacts - in order to do so areas of high risk should be avoided.</p>
      </div>
      </>
    );
  }

  const SectionTwo = () => {
    const [active, setActive] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [zoomed, setZoomed] = useState(false);
    const [hide, setHide] = useState(true);
    const [selectedWeights, setSelectedWeights] = useState(false);

    useEffect(() => {
      const handleHover = () => {
        setHovered(true);
        setActive(true);
      }
      document.getElementById("risk-rating").addEventListener("mouseenter", handleHover);
      return () => {
        document.getElementById("risk-rating").addEventListener("mouseenter", handleHover);
      };
    }, []);

    useEffect(() => {
      const handleHover = () => {
        setHovered(false);
        if (document.querySelector(".text-box.risk-rating:hover")) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
      document.getElementById("risk-rating").addEventListener("mouseleave", handleHover);
      return () => {
        document.getElementById("risk-rating").removeEventListener("mouseleave", handleHover);
      };
    }, []);
    
    useEffect(() => {
      const handleHover = () => {
        if (hovered) {
          setActive(true);
        }
      }
      document.getElementById("risk-rating-text-box").addEventListener("mouseenter", handleHover);
      return () => {
        document.getElementById("risk-rating").removeEventListener("mouseenter", handleHover);
      };
    }, []);

    useEffect(() => {
      const handleHover = () => {
        if (!hovered) {
          setActive(false);
        }
      }
      document.getElementById("risk-rating-text-box").addEventListener("mouseleave", handleHover);
      return () => {
        document.getElementById("risk-rating-text-box").removeEventListener("mouseleave", handleHover);
      };
    }, []);

    useEffect(() => {
      let showInterval;
      let labelInterval;
  
      const cycleShown = () => {
        setHide(prev => !prev);
      };

      const cycleLabelShown = () => {
        setSelectedWeights(prev => !prev);
      }
  
      labelInterval = setInterval(cycleLabelShown, 5500);
      showInterval = setInterval(cycleShown, 6000);

      return () => clearInterval(labelInterval, showInterval);
    }, []);

    return (
      <>
      <div id="risk-rating-text-box" className={`text-box risk-rating ${active? "active" : ""}`}>
        <div className="risk-ratings">
          <div className="risk-rating-background green"><span className="section-text title risk-rating-tb">2</span></div>
          <div className="risk-rating-background blue"><span className="section-text title risk-rating-tb">3</span></div>
          <div className="risk-rating-background red"><span className="section-text title risk-rating-tb">4</span></div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-content top">
          <p className="section-text title">Assiging Edge Weights</p>
          <p className="section-text main">In order to assign an edge weight we must first convert the town into a graph where each road and intersection is represented as edges and nodes.</p>
        </div>
        <div className="section-2-content middle">
          <div className={`section-2-graph ${zoomed? "zoomed" : ""}`} onClick={() => setZoomed(prev => !prev)}>
            <div className={`graph-backgrounds ${hide? "hide": ""}`}>
              <div className="graph-background-1 green"></div>
              <div className="graph-background-2 green"></div>
              <div className="graph-background-3 red"></div>
              <div className="graph-background-4 red"></div>
              <div className="graph-background-5 green"></div>
              <div className="graph-background-6 green"></div>
              
              <div className="graph-background-7 green"></div>
              <div className="graph-background-8 blue"></div>
              <div className="graph-background-9 blue"></div>
              <div className="graph-background-10 red"></div>
              <div className="graph-background-11 red"></div>
              <div className="graph-background-12 blue"></div>
              <div className="graph-background-13 green"></div>

              <div className="graph-background-14 green"></div>
              <div className="graph-background-15 green"></div>
              <div className="graph-background-16 blue"></div>
              <div className="graph-background-165 blue"></div>
              <div className="graph-background-17 red"></div>
              <div className="graph-background-18 red"></div>
              <div className="graph-background-19 blue"></div>
              <div className="graph-background-20 blue"></div>
              <div className="graph-background-21 green"></div>
              <div className="graph-background-22 green"></div>

              <div className="graph-background-23 green"></div>
              <div className="graph-background-24 blue"></div>
              <div className="graph-background-245 blue"></div>
              <div className="graph-background-25 red"></div>
              <div className="graph-background-26 red"></div>
              <div className="graph-background-265 red"></div>
              <div className="graph-background-27 blue"></div>
            </div>
            <GraphOne selectedWeights={selectedWeights} />
          </div>
          <p className="section-text main middle-text-2">Then I assigned an initial edge weight to represent the estimated length of each road.</p>
          <p className="section-text main middle-text-2 mid">Next I allocated a <strong id="risk-rating">risk rating</strong> for each zone and then calculated a risk value for each road by finding the average risk rating of the zones on either side of the road.</p>
          <p className="section-text main middle-text-2 bottom">Now each edge has been assinged both a distance and risk value. </p>
        </div>
      </div>
      </>
    );
  }
  
  const SectionThree = () => {

    

    return (
      <div className="section-3">
        <div className="section-3-content">
          <p className="section-text title section-3-title">The Algorithm</p>
          <div className="flow-diagram">
            <div className="diagram-circle">
              <div className="diagram-circle-block"></div>
            </div>
            <div className="diagram-point _1">
              <img 
                className="diagram-icon _1"
                src={icons.start}
              />
              <div className="diagram-point-text _1_">
                <span className="section-text small-title">1. Select Locations</span>
                <span className="section-text main">Select the source node and &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  destination node</span>
              </div>
            </div>
            <div className="diagram-point _2">
              <img 
                className="diagram-icon __2"
                src={icons.record}
              />
              <div className="diagram-point-text _2_">
                <span className="section-text small-title">2. Initialise</span>
                <span className="section-text main">Set the value for the start node to 0 and the rest to infinity. Also mark all nodes as unvisited.</span>
              </div>
            </div>
            <div className="diagram-point _3">
              <img 
                className="diagram-icon __3"
                src={icons.map}
              />
              <div className="diagram-point-text _3_">
                <span className="section-text small-title">&nbsp; &nbsp; &nbsp; 3. Explore</span>
                <span className="section-text main">&nbsp; Visit the smallest unvisited &nbsp;node; update neighboring nodes if the cumulative value is smaller.</span>
              </div>
            </div>
            <div className="diagram-point _4">
              <img 
                className="diagram-icon __4"
                src={icons.tick}
              />
              <div className="diagram-point-text _4_">
                <span className="section-text small-title">4. Mark Visited</span>
                <span className="section-text main">Record the current node as visited so it isn't visited again.</span>
              </div>
            </div>
            <div className="diagram-point _5">
              <img 
                className="diagram-icon __5"
                src={icons.target}
              />
              <div className="diagram-point-text _5_">
                <span className="section-text small-title">5. Output</span>
                <span className="section-text main">The output is the &nbsp; best path; shortest, &nbsp;  &nbsp;safest, or balanced; &nbsp;  &nbsp;depending on the &nbsp; &nbsp;chosen weights.</span>
              </div>
            </div>
            <div className="repeat-points">
              <span className="section-text main">Repeat 3 and 4 until destination &nbsp; node is reached or all nodes are visited.</span>
            </div>
            <img 
              className="repeat-icon"
              src={icons.repeat}
            />
          </div>
        </div>
      </div>
    );
  }

  const SectionFour = () => {
    const [selectedPath, setSelectedPath] = useState(0);
    const [previousPath, setPreviousPath] = useState(0);
    const [delay, setDelay] = useState(5500)
    const [interrupt, setInterrupt] = useState(false);
  
    useEffect(() => {
      let interval;
  
      const cyclePaths = () => {
        setPreviousPath(selectedPath);
        setSelectedPath((prevSelectedPath) => (prevSelectedPath + 1) % 3);
      };
  
      interval = setInterval(cyclePaths, delay);
      
      if (delay === 11000) {
        setDelay(5500);
      }
  
      return () => clearInterval(interval);
    }, [interrupt, selectedPath]);
  
    const handleButtonClick = (path) => {
      setInterrupt(true);
      setDelay(11000);
  
      setPreviousPath(selectedPath);
      setSelectedPath(path);
    };
  
    return (
      <div className="section-4">
        <div className="section-4-content">
          <p className="section-text title left-margin">Paths</p>
          <div className="path-buttons left-margin">
            <button
              className={`path-button path-colour-0 ${selectedPath === 0 ? "selected" : ""}`}
              onClick={() => handleButtonClick(0)}
            >
              <span className="section-text main bold">Distance</span>
            </button>
            <button
              className={`path-button path-colour-1 ${selectedPath === 1 ? "selected" : ""}`}
              onClick={() => handleButtonClick(1)}
            >
              <span className="section-text main bold">Risk</span>
            </button>
            <button
              className={`path-button path-colour-2 ${selectedPath === 2 ? "selected" : ""}`}
              onClick={() => handleButtonClick(2)}
            >
              <span className="section-text main bold">Combined</span>
            </button>
          </div>
          <div className="section-4-graph-1">
            <GraphOneAnimated selectedPath={selectedPath} previousPath={previousPath} />
          </div>
          <div className="section-4-graph-2">
            <GraphTwo selectedPath={selectedPath} previousPath={previousPath} />
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <>
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    </>
  )
}

export default Sections;