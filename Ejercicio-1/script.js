const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacion = document.getElementById("operacion");
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

//Se crea una funcion para validar si el segundo numero es cero asi el boton se deshabilita

function verificarValor() {
    const opera = operacion.value;
    const n2 = Number(numero2.value);

    if (opera === "dividir" && n2 === 0) {
        botonCalcular.disabled = true;
    } else {
        botonCalcular.disabled = false;
    }
}

//se agrega listeners a ambos elementos para que se active o desactive automaticamente dependiendo de lo que se seleccione

operacion.addEventListener("change", verificarValor);
numero2.addEventListener("input", verificarValor);


//calculo

botonCalcular.addEventListener("click", () => {
    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);
    let result;

    switch (operacion.value) {
        case "sumar":
            result = n1 + n2;
            break;
        case "restar":
                result = n1 - n2;
            break;
        case "multiplicar":
                    result= n1 * n2;
            break;
        case "dividir":
                result = n1 / n2;
            break;

    }

    resultado.innerText = result;
});