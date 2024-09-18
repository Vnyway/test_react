import { useState } from "react";

const CustomDropdown = ({
  name,
  fields,
  selectedFields,
  setSelectedFields,
  disabled,
}) => {
  const [opened, setOpened] = useState(false);

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

  return (
    <div className="options-with-heading">
      <div className="drop-down-menu">
        <div
          onClick={!disabled ? () => setOpened((pv) => !pv) : () => {}}
          className={`default-option ${
            opened ? "default-option-opened" : "default-option-closed"
          }`}>
          {selectedFields.length ? (
            <p>Selected ({selectedFields.length})</p>
          ) : (
            <p>Select {name}</p>
          )}
          <img
            className={opened ? "arrow-opened" : ""}
            src="./images/arrow.png"
            alt="open menu"
          />
        </div>
        <div className={`${opened ? "options-opened" : "options-closed"}`}>
          {fields.map((field) => (
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
