import React from "react";

/* React.ComponentProps<"input"> já me proporciona props como value, onChange e outras já nativas da tag */
type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
  marginBottom?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
};

/* Neste caso, lembrar de passar o rest ...props no final da tag para sobrescrever as outras
props, por exemplo o type, name, id... */
const Input = ({ label, id, marginBottom, setState, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: marginBottom || "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={label}
        id={id}
        onChange={({ currentTarget }) =>
          setState && setState(currentTarget.value)
        }
        {...props}
      />
    </div>
  );
};

export default Input;
