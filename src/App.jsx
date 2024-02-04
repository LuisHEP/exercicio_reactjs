import { useState } from "react";

import ResultImc from "./components/ResultImc";
import TableImc from "./components/TableImc";
import Formulario from "./components/Formulario";

function App() {
  const [inputAltura, setInputAltura ] = useState(0);
  const [inputPeso, setInputPeso ] = useState(0);
  const [imc, setImc] = useState(null);
  
  function calculaImc() {
      if (inputAltura !== 0 && inputPeso !== 0) {
      const resultImc = inputPeso / (inputAltura * inputAltura);

      setImc(resultImc.toFixed(2).replace(".", ","));
    } else {
      alert("Insira os valores nos campos!")
    }
  };

  return (
    <>
      <header className="containerImc">
        <h1 className="title">IMC React</h1>
        <p>Preencha os campos abaixo para calcular o seu IMC. 😊</p>
        <Formulario
          inputAltura={inputAltura}
          setInputAltura={setInputAltura}
          inputPeso={inputPeso}
          setInputPeso={setInputPeso}
          calculaImc={calculaImc}
        />
      </header>
      
      {imc !== null && (
        <main>
          <ResultImc resultImc={imc} />
          <TableImc resultImc={imc} />
        </main>
      )}
    </>
  )
}

export default App
