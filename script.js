function Resultado() {
    console.log("Chegou em Resultado()")
    X1();
    X2();
  }
  
  
  function X1() {
    console.log("Chegou em X1()")
    let a = parseFloat(document.getElementById("valor_de_a").value);
    console.log("Chegou em a")
    let b = parseFloat(document.getElementById("valor_de_b").value);
    let c = parseFloat(document.getElementById("valor_de_c").value);
  
    let Delta = (b * b) - (4 * a * c);
  
    if (Delta >= 0 ) {
      let x1 = (-b - Math.sqrt(Delta)) / (2 * a);
      document.getElementById("x1").innerHTML = x1;
    } else {
      document.getElementById("x1").innerHTML = "Não existe em reais";
    }
  }
  
  function X2() {
    console.log("Chegou em X2()")
    let a = parseFloat(document.getElementById("valor_de_a").value);
    let b = parseFloat(document.getElementById("valor_de_b").value);
    let c = parseFloat(document.getElementById("valor_de_c").value);
  
    let Delta = (b * b) - (4 * a * c);
  
    if (Delta >= 0) {
      let x2 = (-b + Math.sqrt(Delta)) / (2 * a);
      document.getElementById("x2").innerHTML = x2;
    } else {
      document.getElementById("x2").innerHTML = "Não existe em reais";
    }
  
  }