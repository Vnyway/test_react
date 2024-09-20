import { Link, useLocation } from "react-router-dom";

const NavigationButton = ({ id, text, path }) => {
  const location = useLocation();
  console.log(location);
  return (
    <Link
      key={id}
      to={path}
      className={`page-button ${
        path === location.pathname && "selected-page-button"
      }`}>
      {text}
    </Link>
  );
};

export default NavigationButton;
