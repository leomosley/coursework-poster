import { useEffect } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Link from "./components/Link";
import Centre from "./components/Centre";
import Sections from "./components/Sections";
import FullscreenPopup from "./components/FullscreenPopup";


function App() {
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

  return (
    <>
    <Header />
    <Link />
    <div className="wrapper">
      <Centre />
      <Sections />
      <FullscreenPopup />
    </div>
    </>
  )
}

export default App;