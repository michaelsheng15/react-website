import React from "react";
import "./Home.css";
import TextCard from "./TextCard";
import PhotoCard from "./PhotoCard";
import NavCard from "./NavCard";


const MainCard = () => {
  return (
    <div>
      <NavCard />
      <div className="outline">
        <TextCard />
        <PhotoCard />
      </div>
    </div>
  );
};

export default MainCard;
