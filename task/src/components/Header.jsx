import { NavigationButton } from "./";

const Header = () => {
  return (
    <nav className="header">
      <NavigationButton id={1} text={"Edit Users"} path="/edit" />
      <NavigationButton id={2} text={"Users"} path="/" />
    </nav>
  );
};

export default Header;
