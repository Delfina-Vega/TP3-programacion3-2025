const {useState} = React;

function App() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [operacion, setOperacion] = useState("sumar");
    const [resultado, setResultado] = useState(null);

    //Logica que desactiva el botón cuando el segundo valor es 0 
    const deshabilitar = operacion === "dividir" && numero2 === 0;

    function calcular() {
        let result;

        switch (operacion) {
            case "sumar":
                result = numero1 + numero2;
                break;
            case "restar":
                result = numero1 - numero2;
                break;
            case "multiplicar":
                result = numero1 * numero2;
                break;
            case "dividir":
                result = numero1 / numero2;
                break;
                default:
                    result = 0;
        }

        setResultado(result);
    }

    //Parte visual (Interfaz)
    //Se implementan inputs, select para seleccionar las operaciones y onChange para actualizar el valor cada vez que el usuario escriba
    return (
        <div> 
           <div>
            <label htmlFor="numero1">Numero 1:</label>
            <input
            type="number"
            id="numero1"
            value={numero1}
            onChange={(e) => setNumero1(Number(e.target.value))}
    
             />

            </div>

            <div>
                <label htmlFor="numero2">Numero 2:</label>
                <input type="number"
                id="numero2"
                value={numero2}
                onChange={(e) => setNumero2(Number(e.target.value))} 
                />
            </div>
           
           <div>
            <label htmlFor="operacion">Operación</label>
            <select id="operacion"
            value={operacion}
             onChange={(e) => setOperacion(e.target.value)}
            >
              <option value="sumar">Sumar</option>
              <option value="restar">Restar</option>
              <option value="multiplicar">Multiplicar</option>
              <option value="dividir">Dividir</option>

            </select>  
           </div>
        
           <div>
              <button onClick={calcular} disabled={deshabilitar}>Calcular </button>
           </div>

           {/*Muestra el resultado solo si existe, Si resultado es null, muestra vacío */}
           <h2>Resultado:{resultado !== null ? resultado : ""} </h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);