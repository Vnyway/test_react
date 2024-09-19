import { useState, useRef, useEffect } from "react";

const OptionsWithHeading = ({
  heading,
  values,
  selected,
  setSelected,
  isObject,
}) => {
  const [opened, setOpened] = useState(false);
  const [search, setSearch] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (selected) {
      if (isObject) {
        setSearch(selected.name);
      } else {
        setSearch(selected);
      }
    } else {
      setSearch("");
    }
  }, [selected, isObject]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredValues = values.filter((option) => {
    if (isObject) {
      return option.name.toLowerCase().includes(search.trim().toLowerCase());
    }
    return option.name.toLowerCase().includes(search.trim().toLowerCase());
  });

  const nonMatchingValues = values.filter((option) => {
    if (isObject) {
      return !option.name.toLowerCase().includes(search.trim().toLowerCase());
    }
    return !option.name.toLowerCase().includes(search.trim().toLowerCase());
  });

  const sortedValues = [...filteredValues, ...nonMatchingValues];

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setOpened((pv) => !pv);
  };

  if (!isObject) {
    return (
      <div className="options-with-heading">
        <span>{heading}</span>
        <div onClick={handleDivClick} className="drop-down-menu">
          <div
            className={`default-option ${
              opened ? "default-option-opened" : "default-option-closed"
            }`}>
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder={`Select ${heading}`}
              ref={inputRef}
            />
            <img
              className={opened ? "arrow-opened" : ""}
              src="./images/arrow.png"
              alt="open menu"
            />
          </div>
          <div className={`${opened ? "options-opened" : "options-closed"}`}>
            {sortedValues.map((option, index) => (
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
        <div onClick={handleDivClick} className="drop-down-menu">
          <div
            className={`default-option ${
              opened ? "default-option-opened" : "default-option-closed"
            }`}>
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder={`Select ${heading}`}
              ref={inputRef}
            />
            <img
              className={opened ? "arrow-opened" : ""}
              src="./images/arrow.png"
              alt="open menu"
            />
          </div>
          <div className={`${opened ? "options-opened" : "options-closed"}`}>
            {sortedValues.map((option) => (
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
