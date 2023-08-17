import React, { createContext, useContext, useState } from "react";

type UIContextContract = {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>; // tipagem básica de um setState
};

/* O grande segredo para tipar o contexto é passando em seu generics ao criá-lo */
const UIContext = createContext<UIContextContract | null>(null);

export const UIContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const localState = window.localStorage.getItem("isDarkTheme");

    return localState ? JSON.parse(localState) : false;
  });

  return (
    <UIContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </UIContext.Provider>
  );
};

/* Custom Hook para retornar já o Context não sendo nulo, de qualquer forma ele nunca será nulo
pois ao usá-lo dentro do provider, ele já inicia, porém para evitar ficar fazendo validações todas
as vezes que for usar, este hook ajuda */
export const useUIContext = () => {
  const context = useContext(UIContext);

  if (context === null) {
    throw new Error("O hook useContext deve ser usado dentro do Provider");
  }

  return context;
};
