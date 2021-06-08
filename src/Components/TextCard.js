import "./TextCard.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { IconContext } from "react-icons";

const TextCard = () => {
  return (
    <div className="text-card">
      <h1 className="name-text">Michael Sheng</h1>
      <p className="sub-text">Engineer | Developer | Frisbee Enthusiast</p>
      <p className="body-text">
        An aspiring software developer studying Management Engineering{" "}
        <font color="#9900FF">@UWaterloo</font>.📍
      </p>
      <p className="body-text">
        This summer, I interned <font color="#0055FF">@York Region</font>{" "}
        as a Technical Support Analyst. 💻
      </p>

      <div className="button-container">
        <IconContext.Provider value={{ color: "#222" }}>
          <button className="button-home">
            <a
              target="_blank"
              href="https://github.com/michaelsheng15"
              rel="noreferrer"
            >
              <AiFillGithub className="logo" />
            </a>
          </button>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#222" }}>
          <button className="button-home">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/michaeljsheng/"
              rel="noreferrer"
            >
              <AiFillLinkedin className="logo" />
            </a>
          </button>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#222" }}>
          <button className="button-home">
            <a
              target="_blank"
              href="mailto:m3sheng@uwaterloo.ca"
              rel="noreferrer"
            >
              <AiFillMail className="logo" />
            </a>
          </button>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "#222" }}>
          <button className="button-home">
            <a target="_blank" href="null" rel="noreferrer">
              <AiFillFile className="logo" />
            </a>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default TextCard;
