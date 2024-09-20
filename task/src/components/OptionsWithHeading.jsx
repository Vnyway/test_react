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
      setSearch(isObject ? selected.name : selected);
    } else {
      setSearch("");
    }
  }, [selected, isObject]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredValues = values.filter((option) => {
    const optionName = isObject ? option.name : option;
    if (isObject) {
      return (
        optionName.toLowerCase().includes(search.trim().toLowerCase()) &&
        (!selected || selected?.value !== option.value)
      );
    } else {
      return (
        optionName.toLowerCase().includes(search.trim().toLowerCase()) &&
        (!selected || selected !== option)
      );
    }
  });

  const nonMatchingValues = values.filter((option) => {
    const optionName = isObject ? option.name : option;
    if (isObject) {
      return (
        !optionName.toLowerCase().includes(search.trim().toLowerCase()) &&
        (!selected || selected?.value !== option.value)
      );
    } else {
      return (
        !optionName.toLowerCase().includes(search.trim().toLowerCase()) &&
        (!selected || selected !== option)
      );
    }
  });

  const sortedValues = [
    ...(selected ? [selected] : []),
    ...filteredValues,
    ...nonMatchingValues,
  ];

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setOpened((prev) => !prev);
  };

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
              key={isObject ? option.value : index}
              onClick={() => {
                if (isObject) {
                  setSelected({ name: option.name, value: option.value });
                } else {
                  setSelected(option);
                }
              }}
              className={`option ${
                selected === option ||
                (isObject && selected?.value === option.value)
                  ? "selected-option"
                  : ""
              }`}>
              {isObject ? option.name : option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsWithHeading;
