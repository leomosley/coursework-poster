import { createRef, useEffect, useState } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Link from "./components/Link";
import Centre from "./components/Centre";
import Sections from "./components/Sections";
import FullscreenPopup from "./components/FullscreenPopup";

import { icons } from "./constants";


function App() {
  const [orientation, setOrientation] = useState(true);
  console.log(test);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 32) {
        toggleFullScreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleFullScreen = () => {
    if (document.fullscreenEnabled) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleChange = (e) => {
      setOrientation(e.target.orientation != 0)
    };

    window.addEventListener('orientationchange', handleChange);

    return () => {
      window.removeEventListener('orientationchange', handleChange);
    };
  }, []);


  return (
    <>
    <Header />
    <Link />
    <div className="wrapper">
      {/* <Centre /> */}
      <Sections />
      <FullscreenPopup />
    </div>
    <div className={`orientation-message ${orientation? "hidden" : ""}`}>
      <span className="orientation-message-text">Rotate your screen to landscape</span>
      <img 
        className="orientation-message-icon"
        src={icons.rotate}
      />
    </div>
    </>
  )
}

export default App;