import React, { useReducer } from "react";

type FormState = {
  name: string;
  age: number;
  email: string;
};

type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_AGE"; payload: number }
  | { type: "SET_EMAIL"; payload: string };

const FormReducer = (): [FormState, React.Dispatch<FormAction>] => {
  const intialValues = { name: "William", age: 24, email: "william@email.com" };

  /* A grande sacada do useReducer está em tipar o state a ser alterado durante as ations, e as actions que
  serão disparadas, juntamente com seu type e payload */
  const reducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_AGE":
        return { ...state, age: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialValues);

  return [state, dispatch];
};

const useFormReducer = () => FormReducer();

export default useFormReducer;
