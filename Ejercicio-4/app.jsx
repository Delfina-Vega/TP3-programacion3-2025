const{ useState} = React;

function App() {
// Se crea una variable de estado llamada izqActivo que comienza en true, o sea el botón izquierdo está activo
    const [izqActivo, setIzqActivo] = useState(true);

    return (
        <div>
            <button onClick={() => setIzqActivo(false)} disabled= {!izqActivo}>
                Izquierdo 
            </button>
            <button onClick={() => setIzqActivo(true)} disabled={izqActivo}>
                Derecho
            </button>
        </div>
    );
}

//Se vincula el componente App dentro del div con id="root"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);