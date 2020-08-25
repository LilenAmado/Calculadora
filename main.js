// Variables
let operandoA;
let operandoB;
let operacion;
let resultado = document.getElementById('pantalla'); // Global porque sino las otras funciones no la reconocen

function calculadora(){
    let numero0 = document.getElementById('boton0');
    let numero1 = document.getElementById('boton1');
    let numero2 = document.getElementById('boton2');
    let numero3 = document.getElementById('boton3');
    let numero4 = document.getElementById('boton4');
    let numero5 = document.getElementById('boton5');
    let numero6 = document.getElementById('boton6');
    let numero7 = document.getElementById('boton7');
    let numero8 = document.getElementById('boton8');
    let numero9 = document.getElementById('boton9');
    //-----------------------------------
    let multiplicar = document.getElementById('botonMultiplicar');
    let dividir = document.getElementById('botonDividir');
    let sumar = document.getElementById('botonMas');
    let resta = document.getElementById('botonMenos');
    //-----------------------------------
    let reset = document.getElementById('botonReset');
    //-----------------------------------
    let igual = document.getElementById('botonIgual');

    // Eventos 
    numero0.onclick = function(){
        resultado.innerHTML+= 0;
    } 
    numero1.onclick = function(){
        resultado.innerHTML+= 1;
    }
    numero2.onclick = function(){
        resultado.innerHTML+= 2;
    }
    numero3.onclick = function(){
        resultado.innerHTML+= 3;
    }
    numero4.onclick = function(){
        resultado.innerHTML+= 4;
    }
    numero5.onclick = function(){
        resultado.innerHTML+= 5;
    }
    numero6.onclick = function(){
        resultado.innerHTML+= 6;
    }
    numero7.onclick = function(){
        resultado.innerHTML+= 7;
    }
    numero8.onclick = function(){
        resultado.innerHTML+= 8;
    }
    numero9.onclick = function(){
        resultado.innerHTML+= 9;
    }

    // Operaciones 
    sumar.onclick = function(){
        operandoA = resultado.innerHTML; //Guardamos el número en la variable operandoA
        operacion = "+";
        limpiar(); // Limpiamos pantalla
    }
    resta.onclick = function(){
        operandoA = resultado.innerHTML;
        operacion = "-";
        limpiar();
    }
    multiplicar.onclick = function(){
        operandoA = resultado.innerHTML;
        operacion = "*";
        limpiar();
    }
    dividir.onclick = function(){
        operandoA = resultado.innerHTML;
        operacion = "/";
        limpiar();
    }

    // Reset e igual

    reset.onclick = function(){
        resetear();
    }

    igual.onclick = function(){
        operandoB = resultado.innerHTML; //Guarda el seg núm en operandoB cuando se haga click en =
        resolver();
    }
}

// Funcion de limpiar(), resolver() y resetear()

function limpiar(){
    resultado.innerHTML = "";
}
function resetear(){
    resultado.innerHTML = "";
    operandoA = 0; 
    operandoB = 0; 
    operacion = "";
}

function resolver(){
    let result = 0; // Resultado de las operaciones

    switch(operacion){ // Aca realmente se resuelven
        case "+":
            result = parseFloat(operandoA) + parseFloat(operandoB);
            break
        case "-":
            result = parseFloat(operandoA) - parseFloat(operandoB);
            break
        case "*":
            result = parseFloat(operandoA) * parseFloat(operandoB);
            break
        case "/":
            result = parseFloat(operandoA) / parseFloat(operandoB);
            break               
    }

    resetear();
    resultado.textContent = result;
}

calculadora();