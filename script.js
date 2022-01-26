
/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/



function criptografa() {
  var input1 = document.getElementById("input-texto");
  var input2 = document.getElementById("msg");
  var valorCriptografa = btoa(input1.value);
  input2.value = valorCriptografa;
}

function deCriptografa() {
  var input1 = document.getElementById("input-texto");
  var input2 = document.getElementById("msg");
  var valorCriptografa = atob(input1.value);
  input2.value = valorCriptografa;
}

function copiar() {
  var input1 = document.getElementById("msg");
  navigator.clipboard.writeText(input1.value);
}
