import React from "react";

const PlayerImage = ({ track, currentTrackIndex }) => {
  const imageUrl = track ? `${track.image}` : null;
  return (
    <div className="image">
      {imageUrl && (
        <img src={imageUrl} alt={`Track ${currentTrackIndex + 1}`} />
      )}
    </div>
  );
};

export default PlayerImage;
