/* eslint-disable react/prop-types */
// PlayerImage.jsx
import React from "react";

const PlayerImage = ({ track, currentTrackIndex }) => {
  const imageUrl = track ? `/assets/${track.image}` : null;

  return (
    <div className="image">
      {imageUrl && (
        <img src={imageUrl} alt={`Track ${currentTrackIndex + 1}`} />
      )}
    </div>
  );
};

export default PlayerImage;
