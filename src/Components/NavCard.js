import React from "react";
import "./NavCard.css";
import { Link } from 'react-router-dom';


const NavCard = () => {
  return (
    <div>
      <div className="screen">
        <Link to='/experience'><p className="nav-label">Experience 🚀</p></Link>
        <a className="nav-label">Projects 🔧</a>
        <a className="nav-label">Hackathons ☕️</a>
      </div>
    </div>
  );
};

export default NavCard;
