import React from "react";
import ReactPlayer from "react-player";
import "./Home.css";

const Player = ({player, title }) => {
 
  const Title = title.toUpperCase();
  return (
    <div className="player">
      <h1 id = "title">{Title}</h1>
     <ReactPlayer height = "80%" width= "80%" className = "video" url={player}  controls/>
    </div>
  );
};

export default Player;
