import React, { useState, useEffect } from 'react';
import { icons } from "../constants";

// Components
import GraphOne from './GraphOne';
import GraphTwo from "./GraphTwo";

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

    return (
      <>
      <div id="risk-rating-text-box" className={`text-box risk-rating ${active? "active" : ""}`}>
        <p className="section-text main tb"></p>
      </div>
      <div className="section-2">
        <div className="section-2-content top">
          <p className="section-text title">Assiging Edge Weights</p>
          <p className="section-text main">In order to assign an edge weight we must first convert the town into a graph where each road and intersection is represented as edges and nodes.</p>
        </div>
        <div className="section-2-content middle">
          <div className="section-2-graph">
            <GraphOne />
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

    return (
      <div className="section-4">
        <div className="section-4-content">
          <p className="section-text title left-margin">Paths</p>
          <p className="section-text main left-margin">texts</p>
          <GraphOne />
          <GraphTwo />
        </div>
      </div>
    );
  }
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