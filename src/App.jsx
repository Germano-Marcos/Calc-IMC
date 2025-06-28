import { data } from "./data/data";

import { useState } from "react";

import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

import logo from "./assets/logo.svg";
import logop from "./assets/logobranca.png";

function App() {
  const calcImc = (e, altura, peso) => {
    e.preventDefault();

    if (!peso || !altura) return;

    const pesoFloat = +peso.replace(",", ".");
    const alturaFloat = +altura.replace(",", ".");

    const imcResult = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <div className="container">
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
        ) : (
          <ImcTable
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
      </div>
      <div className="logo">
        <img src={logo} alt=""/>
      </div>
    </>
  );
}

export default App;
