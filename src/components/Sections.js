import React, { useState, useEffect } from 'react';

// Components
import GraphOne from './GraphOne';

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
        <p className="section-text main bottom">Within this context utility can be defined as minimising negative impacts - in order to do so areas of high risk should be avoided.</p>
      </div>
      </>
    );
  }

  const SectionTwo = () => {

    return (
      <div className="section-2">
        <div className="section-2-content top">
          <p className="section-text title">Assiging Edge Weights</p>
          <p className="section-text main">In order to assign an edge weight we must first convert the town into a graph where each road and intersection is represented as edges and nodes.</p>
        </div>
        <div className="section-2-content middle">
          <div className="section-2-graph">
            <GraphOne />
          </div>
          <p className="section-text main"></p>
        </div>
        <div className="section-2-content bottom">
          <p className="section-text main"></p>
        </div>
      </div>
    );
  }

  const SectionThree = () => {

    return (
      <div className="section-3">
        <p className="section-text title left-margin">The Algorithm</p>
        <p className="section-text main left-margin">text</p>
      </div>
    );
  }

  const SectionFour = () => {

    return (
      <div className="section-4">
        <p className="section-text title left-margin">Paths</p>
        <p className="section-text main left-margin">texts</p>
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
