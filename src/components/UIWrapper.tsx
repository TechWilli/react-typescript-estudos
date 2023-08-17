import React from "react";
import { useUIContext } from "../contexts/UIContext";

/* Criei este component pois a lógica usada com o data-theme só passa as variáveis de CSS criadas
para os elementos a partir dele (abaixo) */
const UIWrapper = ({ children }: React.PropsWithChildren) => {
  const { isDarkTheme } = useUIContext();

  return (
    <div data-theme={isDarkTheme ? "dark" : "light"} className="ui-wrapper">
      {children}
    </div>
  );
};

export default UIWrapper;
