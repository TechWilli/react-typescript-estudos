import React, { useEffect, useState } from "react";

type UseLocalStorageReturnType = [
  string | undefined,
  React.Dispatch<React.SetStateAction<string | undefined>>
];

const useLocalStorage = (
  key: string,
  initialValue?: string
): UseLocalStorageReturnType => {
  /* Criando o state passando uma função callback para a lógica de retornar o
  valor caso já exista no localStorage, senão retorna o valor inicial passado no hook */
  const [state, setState] = useState<string | undefined>(() => {
    const localState = window.localStorage.getItem(key);

    if (localState) {
      return localState;
    }

    return initialValue;
  });

  /* Toda vez que o setState fizer o update do state, o effect vai ser notificado pois o state está no array
  de dependências, então vai ser feito o novo set no localStatora com aquele novo valor do state.
  o mesmo vale para a key, ao usar o hook  */
  useEffect(() => {
    if (state) {
      window.localStorage.setItem(key, state);
    }
  }, [key, state]);

  return [
    state,
    setState,
  ] /* as const -> poderia usar aqui para sempre respeitar a ordem state e setState */;
};

export default useLocalStorage;
