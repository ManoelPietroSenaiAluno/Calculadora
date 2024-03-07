var a = window.prompt("insira o numero A")
var b = window.prompt("insira o numero B")
var operacao = window.prompt("Insira a operação: * para multiplicar, / para dividir, + para somar e - para subtrair")
switch (operacao) {
  case "+":
    window.alert("Seu resultado é " + (parseInt(a) + parseInt(b)));
    break;
  case "-":
    window.alert("Seu resultado é " + (parseInt(a) - parseInt(b)));
    break;
  case "*":
    window.alert("Seu resultado é " + (parseInt(a) * parseInt(b)));
    break;
  case "/":
    window.alert("Seu resultado é " + (parseInt(a) / parseInt(b)));
    break;
}
