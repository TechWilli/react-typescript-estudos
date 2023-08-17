import React, { useState } from "react";

type CheckboxProps = {
  label: string;
};

const Checkbox = ({ label }: CheckboxProps) => {
  const [value, setValue] = useState(false);

  /* quando a função for muito grande, para pegar a tipagem correta dela é só passar o
  mouse sobre a prop que ela vai e colocar aqui */
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked);
  };

  return (
    <label
      style={{
        padding: "1rem",
        border: `2px solid ${
          value ? "rgb(159, 247, 156)" : "rgb(255, 95, 95)"
        }`,
        borderRadius: "4px",
        backgroundColor: value ? "rgb(222, 255, 221)" : "rgb(255, 216, 216)",
      }}
    >
      <input
        type="checkbox"
        checked={value}
        /* onChange={handleChange} */
        /* Neste caso como a função só muda o estado, é mais comum colocá-la direto na prop de callback
        e a tipagem já será inferida corretamente */
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
      />
      {label} {/* neste caso a label é depois do checkbox mesmo */}
    </label>
  );
};

export default Checkbox;
