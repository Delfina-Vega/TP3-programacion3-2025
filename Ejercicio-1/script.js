const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const operacion = document.getElementById("operacion");
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

//deshabilitamos el boton si se selecciona Dividir

operacion.addEventListener("change", () => {
    if (operacion.value === "dividir")  {
        botonCalcular.disabled = true;
    } else {
        botonCalcular.disabled = false;
    }
});

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

    }

    resultado.innerText = result;
});