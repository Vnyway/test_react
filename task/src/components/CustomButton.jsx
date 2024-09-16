const CustomButton = ({ text, disabled, onClick, size }) => {
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
};

export default CustomButton;
