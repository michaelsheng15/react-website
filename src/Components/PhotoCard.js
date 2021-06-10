import memoji from "../img/memoji.png";
import { Link } from "react-router-dom";
import "./PhotoCard.css";

const PhotoCard = () => {
  return (
    <Link className="photo-card" to="/about-me">
      <img className="memoji" src={memoji} alt="Me!" />
    </Link>
  );
};

export default PhotoCard;
