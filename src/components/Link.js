import React from 'react';

import { images } from "../constants";

function Link() {
  return (
    <div className="link">
      <img 
        className="QR-code"
        src={images.courseworkPosterLink}
      />
    </div>
  );
}

export default Link;
