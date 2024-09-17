import { useState } from "react";

const OptionsWithHeading = ({
  heading,
  values,
  selected,
  setSelected,
  isObject,
}) => {
  const [opened, setOpened] = useState(false);
  if (!isObject) {
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
                key={index}
                onClick={() => setSelected(option.name)}
                className="option">
                {option.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="options-with-heading">
        <span>{heading}</span>
        <div onClick={() => setOpened((pv) => !pv)} className="drop-down-menu">
          <div
            className={`default-option ${
              opened ? "default-option-opened" : "default-option-closed"
            }`}>
            <p>{selected.name}</p>
            <img
              className={opened ? "arrow-opened" : ""}
              src="./images/arrow.png"
              alt="open menu"
            />
          </div>
          <div className={`${opened ? "options-opened" : "options-closed"}`}>
            {values.map((option) => (
              <div
                key={option.value}
                onClick={() =>
                  setSelected({ name: option.name, value: option.value })
                }
                className="option">
                {option.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default OptionsWithHeading;
