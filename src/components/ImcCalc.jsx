import { useState } from "react";

import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const limparForm = (e) => {
    e.preventDefault();
    setPeso("");
    setAltura("");
  };

  const validarDigitos = (texto) => {
    return texto.replace(/[^0-9,]/g, "");
  };

  const handleEditarAltura = (e) => {
    const atualizarValor = validarDigitos(e.target.value);
    setAltura(atualizarValor);
  };

  const handleEditarPeso = (e) => {
    const atualizarValor = validarDigitos(e.target.value);
    setPeso(atualizarValor);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="altura">Altura:</label>
            <input
              type="text"
              name="altura"
              id="altura"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleEditarAltura(e)}
              value={altura}
            />
          </div>
          <div className="form-control">
            <label htmlFor="peso">Peso:</label>
            <input
              type="text"
              name="peso"
              id="peso"
              placeholder="Exemplo 70,5"
              onChange={(e) => handleEditarPeso(e)}
              value={peso}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, altura, peso)} />
          <Button id="clear-btn" text="Limpar" action={limparForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
