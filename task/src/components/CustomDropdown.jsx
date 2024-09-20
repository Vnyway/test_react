import { useEffect, useRef, useState } from "react";

const CustomDropdown = ({
  name,
  fields,
  selectedFields,
  setSelectedFields,
  disabled,
}) => {
  const [opened, setOpened] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setOpened(false);
      setSelectedFields([]);
    }
  }, [disabled]);

  const handleSelectField = (field) => {
    const isAlreadySelected = selectedFields.some(
      (selectedField) => selectedField.value === field.value
    );

    if (!isAlreadySelected) {
      setSelectedFields([
        ...selectedFields,
        {
          name: field.name,
          value: field.value,
        },
      ]);
    } else {
      setSelectedFields(
        selectedFields.filter(
          (selectedField) => selectedField.value !== field.value
        )
      );
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredValues = fields.filter(
    (option) =>
      !selectedFields.some(
        (selectedField) => selectedField.value === option.value
      ) && option.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  const nonMatchingValues = fields.filter(
    (option) =>
      !selectedFields.some(
        (selectedField) => selectedField.value === option.value
      ) && !option.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  const sortedValues = [
    ...selectedFields,
    ...filteredValues,
    ...nonMatchingValues,
  ];

  const handleDivClick = () => {
    if (inputRef.current && opened === false) {
      inputRef.current.focus();
    }
    setOpened((pv) => !pv);
  };

  return (
    <div className="options-with-heading">
      <div className="drop-down-menu">
        <div
          onClick={!disabled ? handleDivClick : () => {}}
          className={`default-option ${
            opened ? "default-option-opened" : "default-option-closed"
          }`}>
          <input
            type="text"
            disabled={disabled}
            ref={inputRef}
            value={search}
            onChange={handleChange}
            placeholder={
              selectedFields.length
                ? `Selected (${selectedFields.length})`
                : `Select ${name}`
            }
          />
          <img
            className={opened ? "arrow-opened" : ""}
            src="./images/arrow.png"
            alt="open menu"
          />
        </div>
        <div className={`${opened ? "options-opened" : "options-closed"}`}>
          {sortedValues.map((field) => (
            <div
              key={field.value}
              onClick={() => handleSelectField(field)}
              className={`dropdown-option ${
                selectedFields.some(
                  (selectedField) => selectedField.value === field.value
                )
                  ? "selected-dropdown-option"
                  : ""
              }`}>
              <button>
                <img src="./images/check.png" alt="check" />
              </button>
              {field.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
