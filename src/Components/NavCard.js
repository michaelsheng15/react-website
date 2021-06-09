import React from "react";
import "./NavCard.css";

const NavCard = () => {
  return (
    <div>
      <div className="screen">
        <a className="nav-label">Experience 🚀</a>
        <a className="nav-label">Projects 🔧</a>
        <a className="nav-label">Hackathons ☕️</a>
      </div>
      <hr className='nav-line'/>
    </div>
  );
};

export default NavCard;
