import { useState } from "react";

const OptionsWithHeading = ({ heading, values, selected, setSelected }) => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="options-with-heading">
      <span>{heading}</span>
      <div onClick={() => setOpened((pv) => !pv)} className="drop-down-menu">
        <div
          className={`default-option ${
            opened ? "default-option-opened" : "default-option-closed"
          }`}>
          <p>{selected}</p>
          <img
            className={opened ? "arrow-opened" : ""}
            src="./images/arrow.png"
            alt="open menu"
          />
        </div>
        <div className={`${opened ? "options-opened" : "options-closed"}`}>
          {values.map((option, index) => (
            <div
              key={option.value || index}
              onClick={() => setSelected(option.name)}
              className="option">
              {option.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsWithHeading;
