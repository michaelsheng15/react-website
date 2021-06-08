import memoji from "../img/memoji.png";
import RoundText from './RoundText'

import "./PhotoCard.css";

const PhotoCard = () => {
  return (
    <div className="photo-card">
      <img className="memoji" src={memoji} alt="Me!" />
    </div>
  );
};

export default PhotoCard;
