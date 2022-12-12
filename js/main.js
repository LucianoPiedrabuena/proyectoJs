


let usuario = "Luciano";
let contrasenia = 1234;



for (let i = 1; i <= 2; i++) {

    let usuarioIngresado = prompt("Ingresá tu usuario");
    let contraseniaIngresada = parseInt(prompt("Ingresá tu contraseña"));

    if ((usuario == usuarioIngresado) && (contrasenia == contraseniaIngresada)) {

        alert("Ingreso correcto")
        break;
    }
    else {
        alert("Nombre o contraseña incorrectos");
    }
}



// SEGUNDA PREENTREGA
//Mi idea es que al ingresar algún elemento del array tipoPermisos, me pregunte qué peligros existen.

function nuevoIngreso() {
 let ingreso = prompt("¿Qué tipo de permiso querés abrir?");
 const tipoPermisos = ["General", "Caliente", "Altura", "Excavaciones", "Espacios Confinados", "Eléctrico", "Izaje", "Demolición"];


}
nuevoIngreso ();
if (nuevoIngreso.ingreso = "general"){
    prompt("Ingresa el peligro")
}

const peligrosMecanicos = ["Objetos que caen", "Objetos cortantes", "Objetos que se proyectan", "Altas temperaturas", "Atrapamientos", "Choque de objetos", "Atropellamiento", "Volcamiento", "Resbalamiento", "Caídas a nivel", "Caídas a desnivel"]
const peligrosElectricos = ["Contacto eléctrico directo", "Contacto eléctrico indirecto", "Energía estática"]
const peligrosErgonomicos = ["Manipulación de cargas", "Levantamiento de carga", "Movimiento repetitivo", "Posturas forzadas"]
const peligrosQuimicos = ["Inhalación de polvos", "Vapores/gases", "Contacto Químico", "Otro"]
const peligrosFisicos = ["Ruidos/Vibraciones", "Stres térmico", "Iluminación", "Salpicaduras", "Ventilación", "Otros"]
const peligrosIncendio = ["Incendio de sólidos", "Incendio de combustibles", "Incendio de gases", "Incendio eléctrico", "Derrame químicos", "Incendios combinados"]
const peligrosBiologicos = ["Micoorganismos", "Insectos", "Otros"]
//  if(tipoPermisos.indexOf(ingreso) != -1) {
//     alert("Ingresá el tipo de permiso");
//  }
const peligrosGenerales = [peligrosMecanicos, peligrosElectricos, peligrosErgonomicos, peligrosQuimicos, peligrosFisicos, peligrosIncendio, peligrosBiologicos]
 

console.log (peligrosGenerales);
 







