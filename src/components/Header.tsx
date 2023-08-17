import React, { useEffect } from "react";
import { useUIContext } from "../contexts/UIContext";
import Button from "./Button";
import useLocalStorage from "../hooks/useLocalStorage";

const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useUIContext();
  const [, setThemeStored] = useLocalStorage("isDarkTheme");

  const handleSwitchTheme = () => {
    setIsDarkTheme((currentValue) => !currentValue);
  };

  useEffect(() => {
    setThemeStored(JSON.stringify(isDarkTheme));
  }, [isDarkTheme, setThemeStored]);

  return (
    <>
      <h1>React With Typescript - {isDarkTheme ? "Dark" : "Light"} Theme</h1>
      <Button onClick={handleSwitchTheme}>Mudar Tema</Button>
    </>
  );
};

export default Header;
