import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillFileMarkdown } from "react-icons/ai";
import { IconContext } from "react-icons";
import "./ButtonContainer.css";

const ButtonContainer = () => {
  return (
    <div className="button-container">
      <IconContext.Provider
        value={{ color: "#333333", className: "button-scale" }}
      >
        <button className="button-icon">
          <a
            target="_blank"
            href="https://github.com/michaelsheng15"
            rel="noreferrer"
          >
            <AiFillGithub className="logo" />
          </a>
        </button>
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: "#333333", className: "button-scale" }}
      >
        <button className="button-icon">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/michaeljsheng/"
            rel="noreferrer"
          >
            <AiFillLinkedin className="logo" />
          </a>
        </button>
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: "#333333", className: "button-scale" }}
      >
        <button className="button-icon">
          <a
            target="_blank"
            href="mailto:m3sheng@uwaterloo.ca"
            rel="noreferrer"
          >
            <AiFillMail className="logo" />
          </a>
        </button>
      </IconContext.Provider>

      <IconContext.Provider
        value={{ color: "#333333", className: "button-scale", border: "none" }}
      >
        <button className="button-icon">
          <a target="_blank" href="null" rel="noreferrer">
            <AiFillFileMarkdown className="logo" />
          </a>
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default ButtonContainer;
