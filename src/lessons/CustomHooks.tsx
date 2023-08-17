import React, { useState } from "react";
import Button from "../components/Button";
import useLocalStorage from "../hooks/useLocalStorage";
import { useUIContext } from "../contexts/UIContext";
import useFetch from "../hooks/useFetch";

type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
};

const CustomHooks = () => {
  const { isDarkTheme } = useUIContext();
  const [value, setValue] = useLocalStorage("key1", "valor inicial key 1");
  const [otherValue, setOtherValue] = useLocalStorage(
    "key2",
    "valor inicial key 2"
  );

  const [userId, setUserId] = useState(1);

  const { data: userData, loading } = useFetch<User>(
    `https://data.origamid.dev/usuarios/${userId}`
  );

  return (
    <>
      <div>
        <span>CustomHooks</span>
      </div>
      <p>O tema atual é o "{isDarkTheme ? "Dark" : "Light"}"</p>
      <p>
        Abra o DevTools - Application - Local Storage para ver o valor sendo
        salvo
      </p>
      <div className="flex">
        <Button
          size="1rem"
          onClick={() => {
            setValue("novo valor na key1");
          }}
        >
          Novo valor key 1
        </Button>
        <Button
          size="1rem"
          onClick={() => {
            setValue("outro valor na key1");
          }}
        >
          Outro valor key 1
        </Button>
        <Button
          size="1rem"
          onClick={() => {
            setOtherValue("novo valor na key2");
          }}
        >
          Novo valor key 2
        </Button>
        <Button
          size="1rem"
          onClick={() => {
            setOtherValue("outro valor na key2");
          }}
        >
          Outro valor key 2
        </Button>
      </div>
      <p>key1: {value}</p>
      <p>key2: {otherValue}</p>
      <hr />
      <p>Chamada de API usando o custom hook useFetch</p>
      <div className="flex">
        <Button
          onClick={() =>
            setUserId((currentUserIr) =>
              currentUserIr > 1 ? currentUserIr - 1 : 1
            )
          }
        >
          Anterior
        </Button>
        <Button
          onClick={() =>
            setUserId((currentUserIr) =>
              currentUserIr < 10 ? currentUserIr + 1 : 10
            )
          }
        >
          Próximo
        </Button>
      </div>
      {loading ? (
        <div>
          <p>Carregando dados...</p>
        </div>
      ) : (
        <ul>
          <li>Id: {userData?.id}</li>
          <li>Nome: {userData?.nome}</li>
          <li>Idade: {userData?.idade}</li>
          <li>Aulas: {userData?.aulas}</li>
          <li>Playback: {userData?.preferencias?.playback}</li>
          <li>Volume: {userData?.preferencias?.volume}</li>
          <li>Qualidade: {userData?.preferencias?.qualidade}</li>
        </ul>
      )}
    </>
  );
};

export default CustomHooks;
