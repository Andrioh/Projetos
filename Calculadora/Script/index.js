let Tecla0 = document.getElementById("0")
let Tecla1 = document.getElementById("1")
let Tecla2 = document.getElementById("2")
let Tecla3 = document.getElementById("3")
let Tecla4 = document.getElementById("4")
let Tecla5 = document.getElementById("5")
let Tecla6 = document.getElementById("6")
let Tecla7 = document.getElementById("7")
let Tecla8 = document.getElementById("8")
let Tecla9 = document.getElementById("9")

let TeclaMais = document.getElementById("Mais")
let TeclaSubtrair = document.getElementById("Subtrair")
let TeclaVezes = document.getElementById("Vezes")
let TeclaSomar = document.getElementById("Somar")

let Mensagem = document.getElementById("Mensagem")

let Input = document.getElementById("Resultado")

let Valor1 = 0
let Valor2 = 0
let Operador = ""

function TCapagar() {
    Valor1 = 0
    Valor2 = 0

    Input.value = ""
}

function Focus() {
    Input.focus()
}

function TCSomar() {
    if (Operador == "") {

        Mensagem.style.color = "Red"
        Mensagem.innerHTML = "[ERRO] Selecione um operador primeiro!"

        setTimeout(function () {
            Mensagem.innerHTML = ""
        }, 4000);

    } else {

        let resultado = eval(Input.value)
        Input.value = resultado

    }
}

Input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
      TCSomar();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "+") {
      Operador = "Mais";
    } else if (event.key === "-") {
      Operador = "Menos";
    } else if (event.key === "*") {
      Operador = "Vezes";
    }
  });

// Operadores:

function TCmais() {
    Operador = "Mais"
    Input.value += "+"
}

function TCsubtrair() {
    Operador = "Subtrair"
    Input.value += "-"
}

function TCvezes() {
    Operador = "Vezes"
    Input.value += "*"
}

// Teclas númericas:

function TC9() {
    
    Input.value += 9

}

function TC8() {

    Input.value += 8

}

function TC7() {

    Input.value += 7

}

function TC6() {

    Input.value += 6

}

function TC5() {

    Input.value += 5

}

function TC4() {

    Input.value += 4

}

function TC3() {

    Input.value += 3

}

function TC2() {

    Input.value += 2

}

function TC1() {

    Input.value += 1

}

function TC0() {

    Input.value += 0

}