//Cargamos un arreglo con palabras disponibles para buescar
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango", "ciruela", "cereza"];
const formulario =document.getElementById("formulario");
const inputFiltro = document.getElementById("filtro");
const listaResultado = document.getElementById("resultado");
const error = document.getElementById("error");

//Utilizamos e.preventDefault para evitar que la pagina se recargue al enviar el formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

//convertimos la palabra en minuscula y quitamos espacios
//Agregamos validaciones
    const texto = inputFiltro.value.trim().toLowerCase();
    error.innerText ="";
    listaResultado.innerHTML = "";
    
    if (texto === "") {
        error.innerText =  "Por favor ingrese una palabra para filtrar.";
        return;
    }


const filtradas = palabras.filter((palabra) =>
palabra.toLowerCase().includes(texto)
);

if (filtradas.length === 0) {
    listaResultado.innerHTML = "<li>No se encontraron coincidencias.</li>";
} else  {
    filtradas.forEach((palabra) => {
        const item = document.createElement("li");
        item.innerText = palabra;
        listaResultado.appendChild(item);
        
    });
}
});