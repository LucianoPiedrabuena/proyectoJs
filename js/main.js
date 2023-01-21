


// let usuario = "Luciano";
// let contrasenia = 1234;
// let nombresIngresados = "";
// let ingresarUsuario = "";
// let contraseniaIngresada = "";

// do {
//  ingresarUsuario = prompt("Ingresá tu usuario, por favor");
//  contraseniaIngresada = parseInt(prompt("Ahora, ingresá tu clave")); 

// } while (ingresarUsuario != usuario || contraseniaIngresada !=contrasenia)

// Swal.fire({
//     title: 'ACCESO CORRECTO',
//     text: 'Puedes completar los campos del Permiso de Trabajo',
//     icon: 'success',
//     confirmButtonText: 'MUY BIEN. EMPECEMOS'
//   })




const peligrosMecanicos = ["Objetos que caen", "Objetos cortantes", "Objetos que se proyectan", "Altas temperaturas", "Atrapamientos", "Choque de objetos", "Atropellamiento", "Volcamiento", "Resbalamiento", "Caídas a nivel", "Caídas a desnivel"]
const peligrosElectricos = ["Contacto eléctrico directo", "Contacto eléctrico indirecto", "Energía estática"]
const peligrosErgonomicos = ["Manipulación de cargas", "Levantamiento de carga", "Movimiento repetitivo", "Posturas forzadas"]
const peligrosQuimicos = ["Inhalación de polvos", "Vapores/gases", "Contacto Químico", "Otro"]
const peligrosFisicos = ["Ruidos/Vibraciones", "Stres térmico", "Iluminación", "Salpicaduras", "Ventilación", "Otros"]
const peligrosIncendio = ["Incendio de sólidos", "Incendio de combustibles", "Incendio de gases", "Incendio eléctrico", "Derrame químicos", "Incendios combinados"]
const peligrosBiologicos = ["Micoorganismos", "Insectos", "Otros"]

const todosLosPeligros =[
    [],
    peligrosMecanicos,
    peligrosElectricos,
    peligrosErgonomicos,
    peligrosQuimicos,
    peligrosFisicos,
    peligrosIncendio,
    peligrosBiologicos,
]
// //  if(tipoPermisos.indexOf(ingreso) != -1) {
// //     alert("Ingresá el tipo de permiso");
// //  }
// const peligrosGenerales = [peligrosMecanicos, peligrosElectricos, peligrosErgonomicos, peligrosQuimicos, peligrosFisicos, peligrosIncendio, peligrosBiologicos]
 

// console.log (peligrosGenerales);
 //Se intenta armar una "base de datos" en el localstorage. Se anula lo hecho en la segunda preentrega.
localStorage.setItem("pMecanicos",["Objetos que caen","Objetos cortantes","Objetos que se proyectan","Altas temperaturas","Atrapamientos","Choque de objetos","Atropellamientos","Volcamiento","Resbalamiento"]);
localStorage.setItem("pElectricos",["Contacto eléctrico directo", "Contacto eléctrico indirecto", "Energía estática"]);
localStorage.setItem("pErgonomicos",["Manipulación de cargas", "Levantamiento de carga", "Movimiento repetitivo", "Posturas forzadas"]);
localStorage.setItem("pQuimicos",["Inhalación de polvos", "Vapores/gases", "Contacto Químico", "Otro"]);
localStorage.setItem("Pfisicos",["Ruidos/Vibraciones", "Stres térmico", "Iluminación", "Salpicaduras", "Ventilación", "Otros"]);
localStorage.setItem("pIncendio",["Incendio de sólidos", "Incendio de combustibles", "Incendio de gases", "Incendio eléctrico", "Derrame químicos", "Incendios combinados"]);
localStorage.setItem("pBiologicos",["Micoorganismos", "Insectos", "Otros"]);



const boton = document.getElementById('btn');
const enviarInfo = boton.onclick = ()=>{
    
}

class Permiso{
  empezarPermiso (tipo, medidas, epps){
    const infoPermiso = {
        tipo: tipo,
        medidas : medidas,
        epps : epps,
    }
  this.guardarPermisoEnLocalStorage(infoPermiso)  
    }
    guardarPermisoEnLocalStorage(infoPermiso){
        let permiso;

        permiso = this.obtenerPermisoLocalStorage();

        permiso.push(infoPermiso);

        localStorage.setItem('permiso', JSON.stringify(permiso))
    }
    obtenerPermisoLocalStorage(){
        permisoLs;

        if(localStorage.getItem('permiso')===null){
            permisoLs =[];

        }
        else{
        permisoLs = JSON.parse(localStorage.getItem ('permiso'))
        }
        return permisoLs;
    }

}








