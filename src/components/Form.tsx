import React from "react";
import Input from "./Input";
import useFormReducer from "../reducers/FormReducer";

const Form = () => {
  const [formState, dispatch] = useFormReducer();
  const { name, age, email } = formState;

  return (
    <div>
      <p>Form com Reducer</p>
      <Input
        id="name"
        label={`Nome: ${name}`}
        value={name}
        onChange={({ target }) =>
          dispatch({ type: "SET_NAME", payload: target.value })
        }
      />
      <Input
        id="age"
        label={`Idade: ${age}`}
        value={age}
        onChange={({ target }) =>
          dispatch({ type: "SET_AGE", payload: Number(target.value) })
        }
      />
      <Input
        id="email"
        label={`E-mail: ${email}`}
        type="email"
        value={email}
        onChange={({ target }) =>
          dispatch({ type: "SET_EMAIL", payload: target.value })
        }
      />
    </div>
  );
};

export default Form;
