import React, { useCallback, useEffect, useState } from "react";
import Input from "../components/Input";

type Sale = {
  id: string;
  nome: string;
  pagamento: string;
  parcelas: number | null;
  preco: number;
  status: string;
};

const API_BASE_URL = `https://data.origamid.dev/vendas`;

const ProductSalesExercise = () => {
  const [sales, setSales] = useState<Sale[] | null>();
  const [initDate, setInitDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchProductSalesData = useCallback(async () => {
    try {
      if (!!initDate && !!endDate) {
        console.log("chamou a função fetchProductSalesDataAsync");
        console.log("EXECUTOU O FETCH");

        const response = await fetch(
          `${API_BASE_URL}?inicio=${initDate}&final=${endDate}`
        );

        const json = await response.json();

        console.log(json);
        setSales(json as Sale[]);
      }
    } catch (error) {
      console.log("error fetchProductSalesData", error);
    }
  }, [initDate, endDate]);

  useEffect(() => {
    fetchProductSalesData();
  }, [fetchProductSalesData]);

  return (
    <div>
      <Input
        id="inicio"
        label="Data de início das vendas"
        type="date"
        setState={setInitDate}
      />
      <Input
        id="fim"
        label="Data de fim das Vendas"
        type="date"
        setState={setEndDate}
      />
      <hr />
      <p>Vendas:</p>
      <ul>
        {sales &&
          sales.map((sale) => (
            <li key={sale.id}>
              Comprador: {sale.nome} | Status: {sale.status}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductSalesExercise;
