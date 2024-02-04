import React from "react";

const Formulario = ({
    inputAltura,
    setInputAltura,
    inputPeso,
    setInputPeso,
    calculaImc,
}) => {
    return (
        <form className="formImc">
        <label className="label" htmlFor="altura">
            Altura:
            <input
            id="altura"
            className="input"
            type="number"
            placeholder="ex: 1.70"
            onChange={(e) => setInputAltura(Number(e.target.value))}
            />
        </label>
        <label className="label" htmlFor="peso">
            Peso:
            <input
            id="peso"
            className="input"
            type="number"
            placeholder="ex: 70.2"
            onChange={(e) => setInputPeso(Number(e.target.value))}
            />
        </label>
        <button className="buttonForm" onClick={calculaImc} type="button">
            Calcular
        </button>
        </form>
    );
};

export default Formulario;
