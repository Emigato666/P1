document.querySelector("#seleccionIngresar1").style.display="none"
document.querySelector("#seleccionAppDocente").style.display="none"
document.querySelector("#seleccionNivel").style.display="none"
document.querySelector("#seleccionAppAlumno").style.display="none"

document.querySelector("#btnSeccionIngresar").addEventListener("click", mostrarSeleccion)
function mostrarSeleccion(){
    document.querySelector("#seleccionIngresar1").style.display="block"
    document.querySelector("#seleccionRegistro").style.display="none"
    document.querySelector("#seleccionIngresar").style.display="none"
    document.querySelector("#msj").style.display="none"

}


let letra = document.getElementById("letra");
let may = document.getElementById("may");
let num = document.getElementById("num");
let largo = document.getElementById("largo");
let miIngreso = document.getElementById("cts"); 
 

miIngreso.onfocus = function() {
document.getElementById("msj").style.display = "block";
}

//Cuando la persona haga click fuera del campo de contraseña
miIngreso.onblur = function() {
document.getElementById("msj").style.display = "none";
}

// Cuando la persona escriba en el campo de contraseña muestre msj
miIngreso.onkeyup = function() {
// Validar minuzcula
let lowerCaseLetters = /[a-z]/g;
if(miIngreso.value.match(lowerCaseLetters)) {
letra.classList.remove("no");
letra.classList.add("si");
} else {
letra.classList.remove("si");
letra.classList.add("no");
}
// Validar mayuscula 
let upperCaseLetters = /[A-Z]/g;
if(miIngreso.value.match(upperCaseLetters)) {
may.classList.remove("no");
may.classList.add("si");
} else {
may.classList.remove("si");
may.classList.add("no");
}
// Validar numberos
let nums = /[0-9]/g;
if(miIngreso.value.match(nums)) {
num.classList.remove("no");
num.classList.add("si");
} else {
num.classList.remove("si");
num.classList.add("no");
}
// Validar largo
if(miIngreso.value.length >= 4) {
largo.classList.remove("no");
largo.classList.add("si");
} else {
largo.classList.remove("si");
largo.classList.add("no");
}
}



class Registro {
    constructor(nombre1, nombreUsuario1, contraseña1, tipo1, docentes1, nivel1) {
      this.nombre = nombre1;
      this.nombreUsuario = nombreUsuario1;
      this.contraseña = contraseña1;
      this.tipo = tipo1;
      this.docentes = docentes1
      this.nivel = nivel1      
    }
    cambiarNivel(NuevoNivel){
      if(this.nivel == "Avanzado"){
            if(NuevoNivel == "Inicial" || NuevoNivel =="Intermedio"){
              alert("No se puede cambiar a un nivel anterior");
            }
            else{
              this.nivel = NuevoNivel;
              alert("Nivel cambiado");             
                           
            }
          }
          else{
              this.nivel = NuevoNivel;
              alert("Nivel cambiado");
              
                                      
         }
      
      }
      
  }




  
  let Registrados = [];
  
  let registro3 = new Registro("Juan","JuanPe","password3","Alumno","prof1","Inicial");
    console.log(registro3);
    Registrados.push(registro3);

let registro4 = new Registro("Pedro","Pedri","password4","Alumno","prof1","Inicial");
    console.log(registro4);
    Registrados.push(registro4);

  document.querySelector("#btnregistro").addEventListener("click", agregarRegistrado);

     function agregarRegistrado() {

    let nombreCampo = document.querySelector("#txtNombre").value;
    let nombreUsuarioCampo = document.querySelector("#nombreu").value;
    let miIngreso = document.getElementById("cts"); 
    let aparece = buscarElemento(Registrados, "nombreUsuario", nombreUsuarioCampo);
    
     

  

  let lowerCaseLetters = /[a-z]/g;
  

  // Validar mayuscula 
  let upperCaseLetters = /[A-Z]/g;
 
  // Validar numberos
  let nums = /[0-9]/g;
  
    
   
    if (!aparece && miIngreso.value.match(lowerCaseLetters) && miIngreso.value.match(upperCaseLetters) && miIngreso.value.match(nums) && miIngreso.value.length >= 4) {
      
  
      let tipoCampo = document.querySelector("#slcTipo").value;
      let docenteCampo = document.querySelector("#selectDos").value;
      let nivelCampo= "inicial"
      let registro = new Registro(
        nombreCampo,
        nombreUsuarioCampo,
        miIngreso,
        tipoCampo,
        docenteCampo,
        nivelCampo,
      );
      Registrados.push(registro);
      console.log(Registrados);
      document.querySelector("#pResultado").innerHTML= "¡Quedaste registrado exitosamente en la aplicacion!"
    } else {
      alert("Nombre de usuario ya existe o contraseña incorrecta");
    }
  

}

    function buscarElemento(arrElementos, propiedad, dato) {
    let existe = false;
    let elemento;
    let elementoActual
    for (let i = 0; i < arrElementos.length; i++) {
      elemento = arrElementos[i];
      if (elemento[propiedad] === dato) {
        existe = true;
        elementoActual = elemento;        
        break;
      }
    }
    
    return elementoActual;
  }
  
  document.getElementById('slcTipo').addEventListener('change', function () {
    valor = document.querySelector("#slcTipo").value;
    if (valor == "Alumno"){
        var nuevoselect = document.getElementById("selectDos");
        nuevoselect.style.display = "block";
    }
    else{
      var nuevoselect = document.getElementById("selectDos");
        nuevoselect.style.display = "none";
    }


});


document.querySelector("#btnIngresar1").addEventListener("click", buscarUsuario);
  
function buscarUsuario() {
  let busquedausuario = document.querySelector("#txtBusquedaUSU").value;
  let busquedacontraseña = document.querySelector("#txtBusquedaCONTRA").value;
  let usu = obtenerObjeto(Registrados, "nombreUsuario", busquedausuario);
  let contra = obtenerObjeto(Registrados, "contraseña", busquedacontraseña);
  if ((usu !== null || contra !== null) && usu.tipo == "Docente") {
    console.log("Ingresaste a la app")
    document.querySelector("#seleccionIngresar1").style.display="none"
    document.querySelector("#seleccionAppDocente").style.display="block"

    
  }else if((usu !== null || contra !== null) && usu.tipo == "Alumno"){
    document.querySelector("#seleccionIngresar1").style.display="none"
    document.querySelector("#seleccionAppAlumno").style.display="block"
  } else {
    document.querySelector("#pResultado1").innerHTML = "Error en usuario o contraseña, ya estas registrado?";
  }
}

function obtenerObjeto(arrElementos, propiedad, dato) {
  let objeto = null;
  for (let i = 0; i < arrElementos.length; i++) {
    const elemento = arrElementos[i];
    if (elemento[propiedad] === dato) {
      objeto = elemento;
      break;
    }
  }
  return objeto;
}


document.querySelector("#btnBuscar").addEventListener("click", buscaralumno);  
function buscaralumno() {
  let busquedaAlumno = document.querySelector("#txtNivelalumnos").value;
  let alumnonivel = obtenerObjeto(Registrados, "nombre", busquedaAlumno);
  if (alumnonivel !== null) {
    document.querySelector("#pResultadoNivel").innerHTML = `Nombre:${alumnonivel.nombre}<br>
    Nivel:${alumnonivel.nivel}<br>`
    document.querySelector("#seleccionNivel").style.display="block"
  } else {
    document.querySelector("#pResultadoNivel").innerHTML = "No tienes a ese alumno ";
  }
  document.querySelector("#btnAsignarNivel").addEventListener("click", asignarNivel);


 
 
}



function asignarNivel() {
  let usuarioAcambiar = document.querySelector("#txtNivelalumnos").value;
  let alumno = DevolverAlumno(Registrados,"nombre", usuarioAcambiar); 
  let nuevoNivel = document.querySelector("#slcNivel").value;
  console.log(alumno)
  alumno.cambiarNivel(nuevoNivel) 
 document.querySelector("#pResultadoNivelguardado").innerHTML= "¡Nivel asignado correctamente!"
}
function DevolverAlumno(arrElementos, propiedad, dato) {
    let existe = false;
    let elemento;
    let elementoActual
    for (let i = 0; i < arrElementos.length; i++) {
      elemento = arrElementos[i];
      if (elemento[propiedad] === dato) {
        existe = true;
        elementoActual = elemento;
        break;
      }
    }

    return elementoActual;
  }