import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

function BasicConcepts() {
  const [total, setTotal] = useState(0);
  const [travelDate, setTravelDate] = useState("");

  function increment() {
    setTotal((total) => total + 1);
  }
  function decrement() {
    setTotal((total) => total - 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button size="1.5rem" onClick={increment}>
        Increment
      </Button>
      <Button size="1.25rem" onClick={decrement}>
        Decrement
      </Button>
      <hr />

      <Input label="Nome" id="nome" />
      <Input label="E-mail" id="email" type="email" />
      {/* Agora passando a prop "type" ela sobrescreve a padrão text do component.
        também graças ao ComponentProps posso passar o value, onChange e outras props sem precisar anotar no component em si */}
      <Input
        label="Início da viagem"
        id="inicio-viagem"
        type="date"
        value={travelDate}
        onChange={(event) => setTravelDate(event.currentTarget.value)}
      />
      <p>Data selecionada: {travelDate || "-"}</p>
      <Input label="Horário" id="horario" type="time" />
      <Checkbox label="Termos e Condições" />
    </div>
  );
}

export default BasicConcepts;
