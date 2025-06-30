const { useState }= React;

function App() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(null);
    const [mensaje, setMensaje] = useState("");

    //Funcion que se ejecuta al hacer click en Calcular IMC
    function calcularIMC() {
        if (altura <= 0) return;

        //Logica del calculo de IMC, se utilizar toFixed para guardar el resultado con 2 decimales en el estado
        const imcCalculo = peso / (altura * altura);
        setImc(imcCalculo.toFixed(2));

        //Definimos el mensaje segun el valor del IMC
        if (imcCalculo < 18.5) {
            setMensaje("Nivel bajo");
        }  else if (imcCalculo < 25)  {
            setMensaje("Nivel normal");
        }  else if (imcCalculo <30) {
            setMensaje("Nivel sobrepeso");
        }  else {
            setMensaje("Nivel de obesidad");
        }
    }

//Funcion para obtener el color del mensaje
       function colorMensaje() {
        if (imc === null) return "";
        if (imc < 18.5) return "amarillo";
        if (imc <25) return "verde";
        if (imc <30) return "naranja";
        return "rojo";
       }

    //Interfaz, parte grafica
       return (
        <div>
            <div>
                <label htmlFor="peso">Peso (Kg):</label>
                <input type="number"
                id="peso"
                value={peso}
                onChange={(e) => setPeso(Number(e.target.value))} />
            </div>

            <div>
                <label htmlFor="altura">Altura (m):</label>
                <input type="number"
                id="altura"
                value={altura}
                onChange={(e) => setAltura(Number(e.target.value))} />
            </div>

            <button onClick={calcularIMC}>Calcular IMC</button>

        {/*Se muestra el resultado solo si hay un Imc calculado*/}
            {imc !== null && (
                <div>
                    <h2>IMC: {imc}</h2>
                    {/*Linea para poder implementar el css*/}
                    <p className={`mensaje ${colorMensaje()}`}>{mensaje}</p>
                </div>
            )}
        </div>
       );

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);