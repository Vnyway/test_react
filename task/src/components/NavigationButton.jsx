import { Link } from "react-router-dom";

const NavigationButton = ({
  id,
  text,
  path,
  isPageActive,
  setIsPageActive,
}) => {
  return (
    <Link
      to={path}
      onClick={() => setIsPageActive(id)}
      className={`page-button ${
        isPageActive === id && "selected-page-button"
      }`}>
      {text}
    </Link>
  );
};

export default NavigationButton;
