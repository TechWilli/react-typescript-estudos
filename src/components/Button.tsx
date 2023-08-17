import React from "react";

/* O mais básico quando fazemos é ir adicionando prop por necessidade, que não é errado
mas podemos aproveitar as tipagens que o react já nos dá */
type ButtonProps = {
  size?: string;
  // React.MouseEventHandler<HTMLButtonElement>; para caso precisasse pegar o event do click e ter a tipagem dele correta
  onClick?: () => void;
  children?: React.ReactNode;
};

/* Quando quisermos passar a prop children, podemos usar da forma abaixo que é um type utilitário do React
para children?: React.ReactNode; */
type ButtonProps2 = React.PropsWithChildren<{
  size?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;

/* O tipo ComponentProps do React já nos dá a possibilidade de passar props nativas da tag que indicamos
no generic. Neste caso o "button" que já tem um children, podemos passar onClick, className,
id etc sem precisar aumentar cada vez mais as props */
type ButtonProps3 = React.ComponentProps<"button"> & {
  size?: string;
};

/* uma boa prática também é desestruturar as props */
const Button = ({ children, size, ...props }: ButtonProps3) => {
  return (
    <button style={{ fontSize: size }} {...props}>
      {children}
    </button>
  );
};

export default Button;
