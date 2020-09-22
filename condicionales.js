function color() {

    let colorUsuario = prompt("Ingrese color en ingles");
    let colorEsperado = "red";

    let minuscula = colorUsuario.toLowerCase();
    if (minuscula == colorEsperado) {
        document.write ("<h1 style='color: red'> El color es ROJO! </h1>" )
    } else {
        document.write ("<h1> Es incorrecto mi loco, dele pa fuera, el color ingresado fue " + colorUsuario + "</h1>")
    }

}

function year() {
  
    let yearIngreso= prompt("Ingrese un año!!! ");
  
    if (yearIngreso !=2020) {
        
      alert("No, UBIQUESE");
    } else {
        
      alert("No estas desubicado :)");
    }
  
  }
  