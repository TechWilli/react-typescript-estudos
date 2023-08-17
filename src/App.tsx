// Snippet para criar o component -> rafce
// Usar a IDE do VSCode ao nosso favor, passando o mouse sobre os elementos, props, funções etc, vemos a tipagem deles

import React from "react";
import BasicConcepts from "./lessons/BasicConcepts";
import ProductSalesExercise from "./lessons/ProductSalesExercise";
import CustomHooks from "./lessons/CustomHooks";
import Header from "./components/Header";
import { UIContextProvider } from "./contexts/UIContext";
import UIWrapper from "./components/UIWrapper";
import Form from "./components/Form";

function App() {
  return (
    <>
      <UIContextProvider>
        <UIWrapper>
          <Header />
          {/* <BasicConcepts /> */}
          {/* <ProductSalesExercise /> */}
          <CustomHooks />
          {/* <Form /> */}
        </UIWrapper>
      </UIContextProvider>
    </>
  );
}

export default App;
