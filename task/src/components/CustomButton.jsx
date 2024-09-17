const CustomButton = ({ text, image, disabled, onClick, size }) => {
  if (text) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`button-action ${
          size === "large" ? "button-action-large" : "button-action-small"
        } ${disabled ? "disabled" : ""}`}>
        {text}
      </button>
    );
  } else {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={`button-with-image`}>
        {<img src={image} alt="remove" />}
      </button>
    );
  }
};

export default CustomButton;
