import React, { useState, useEffect } from "react";

function FullscreenPopup() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true)
    }, 1500);
  }, []);
  return (
    <div className={`fullscreen-message ${hidden? "hidden" : ""}`}>
      <p className="section-text fs-popup">Press <span className="section-text fs-popup space">space</span> to toggle fullscreen.</p>
    </div> 
  )
}

export default FullscreenPopup;
