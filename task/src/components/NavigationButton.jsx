import { Link } from "react-router-dom";

const NavigationButton = ({ text, ref, isPageActive, setIsPageActive }) => {
  return (
    <Link
      to={ref}
      onClick={setIsPageActive}
      className={`page-button ${isPageActive && "selected-page-button"}`}>
      {text}
    </Link>
  );
};

export default NavigationButton;
