import { useEffect } from "react";

const FieldWithHeading = ({
  heading,
  values,
  defaultValue,
  error,
  setError,
  selected,
  setSelected,
}) => {
  const isSelectedDifferent = selected !== defaultValue;

  const isValidSelection = values.some((option) => option.name === selected);

  useEffect(() => {
    if (isSelectedDifferent && isValidSelection) {
      setError("User already exists");
    } else if (selected === "") {
      setError("This field can't be empty");
    } else {
      setError(false);
    }
  }, [selected, isSelectedDifferent, isValidSelection, setError]);
  return (
    <div className="options-with-heading">
      <div className="heading-wrapper">
        <span>{heading}</span>
        {error && <span>{error}</span>}
      </div>

      <div className="drop-down-menu">
        <div className="default-option default-option-closed">
          <input
            className="option-input"
            onChange={(e) => setSelected(e.target.value)}
            value={selected}
            placeholder={defaultValue}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default FieldWithHeading;
