import { useState } from "react";
import { NavigationButton } from "./";

const Header = () => {
  const [isPageActive, setIsPageActive] = useState(2);
  return (
    <nav className="header">
      <NavigationButton
        id={1}
        text={"Edit Users"}
        path="/edit"
        isPageActive={isPageActive}
        setIsPageActive={setIsPageActive}
      />
      <NavigationButton
        id={2}
        text={"Users"}
        path="/"
        isPageActive={isPageActive}
        setIsPageActive={setIsPageActive}
      />
    </nav>
  );
};

export default Header;
