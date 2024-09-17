import { useState } from "react";

const CustomDropdown = ({
  name,
  fields,
  selectedFields,
  setSelectedFields,
  disabled,
}) => {
  const [opened, setOpened] = useState(false);

  // Toggle the field in and out of selectedFields
  const handleSelectField = (field) => {
    const isAlreadySelected = selectedFields.some(
      (selectedField) => selectedField.value === field.value
    );

    if (isAlreadySelected) {
      // Remove the field if it's already selected
      setSelectedFields(
        selectedFields.filter(
          (selectedField) => selectedField.value !== field.value
        )
      );
    } else {
      // Add the field if it's not selected
      setSelectedFields([...selectedFields, field]);
    }
  };

  return (
    <div className="options-with-heading">
      <div
        onClick={() => setOpened((prev) => !prev)}
        className="drop-down-menu">
        <div
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
              className={`option ${
                selectedFields.some(
                  (selectedField) => selectedField.value === field.value
                )
                  ? "selected-option" // Add selected class for styling
                  : ""
              }`}>
              {field.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
