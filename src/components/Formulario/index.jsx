import { useState } from "react"

import style from "./Form.module.css";

const Formulario = () =>{
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState("");
    const [classificacao, setClassificacao] = useState("");

    const renderizaImc = () =>{
        const imc = peso/ (altura*altura);
        setImc(imc.toFixed(2))

        if(imc < 18.5){
            return(
                setClassificacao("Abaixo do peso")
            )
        } else if(imc >= 18.5 && imc <= 24.9 ){
            return(
                setClassificacao("Peso normal")
            )
        }else if(imc >= 24.9 && imc <= 29.9){
            return(
                setClassificacao("Acima do peso")
            )
        }else{
            return(
                setClassificacao("Obesidade")
            )
        }
    }

    return(
        <form>
            <header>
            <h1>CALCULADORA IMC</h1>
            </header>
            
            <input type="number" placeholder="Digite a altura" onChange={evento => setAltura(evento.target.value)} />
            <input type="number" placeholder="Digite o peso" onChange={evento => setPeso(evento.target.value)} />
            <button onClick={renderizaImc} type="button">CALCULAR IMC</button>
            <h2>IMC: {imc}</h2>
            <h4>Classificação {classificacao}</h4>

        </form>
    )

}

export default Formulario;