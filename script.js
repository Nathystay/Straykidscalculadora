
var segundotexto = false;
var operador = "";

function sumar() {
    segundotexto = true
    operador = "+";
}

function restar() {
    segundotexto = true
    operador = "-";
}

function multiplicar() {
    segundotexto = true
    operador = "*";
}


function dividir() {
    segundotexto = true
    operador = "/";

    if (num2 === 0) {
        alert("No se puede dividir por cero.")
    } else {
        alert("el resultado es =" + (Number(txtnum1.value) / Number(txtnum2.value)));
    }
}  


function Escribir(numbBoton) {
    if (!segundotexto) {
        txtnum1.value += numbBoton;
    }
    if (segundotexto) {
        txtnum2.value += numbBoton;
    }
}
function operacion() {


    switch (operador) {

        case "+":
            alert("el resultado es:" + (Number(txtnum1.value) + Number(txtnum2.value)));
            break;

        case "-":
            alert("el resultado es:" + (Number(txtnum1.value) - Number(txtnum2.value)));
            break;

        case "*":
            alert("el resultado es:" + (Number(txtnum1.value) * Number(txtnum2.value)));
            break;

        case "/":
            alert("el resultado es:" + (Number(txtnum1.value) / Number(txtnum2.value)));
            break;
        default:
            break;

    }
}

function Borrar() {
    txtnum1.value = "";
    txtnum2.value = "";
    segundotexto = false;
    operador = "";
}