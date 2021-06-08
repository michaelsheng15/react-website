import "./TextCard.css";
import ButtonContainer from "./ButtonContainer";

const TextCard = () => {
  return (
    <div className="text-card">
      <h1 className="name-text">Michael Sheng</h1>
      <p className="sub-text">Engineer | Student</p>
      <p className="body-text">
        An aspiring software developer studying Management Engineering{" "}
        <font color="#9900FF">@UWaterloo</font>.📍
      </p>
      <p className="body-text">
        This summer, I interned <font color="#0055FF">@York Region</font> as a
        Technical Support Analyst. 💻
      </p>
      <ButtonContainer />
    </div>
  );
};

export default TextCard;
