import React from "react";
import "./MainCard.css";
import TextCard from "./TextCard";
import PhotoCard from './PhotoCard'


const MainCard = () => {
  return (
    <div className="outline">
        <TextCard />
        <PhotoCard />
    </div>
    
  );
};

export default MainCard;
