let seats = [];
let pasajeros = [];

function Pasajero(nombre,apellido,dni, asiento){
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  this.asiento = asiento;
}

let asientos = document.getElementsByTagName('td');

for (let i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect,false);
    seats.push(asientos[i].textContent);
  }

function redirect(_evt){
    document.getElementById("mostrar").innerHTML= (_evt.target.textContent);
    
    let buscarAsiento = document.getElementById("mostrar").textContent;
      for(let i = 0; i < pasajeros.length; i++){
        if(pasajeros[i].asiento == buscarAsiento){
          document.getElementById("userNombre").value = pasajeros[i].nombre;
          document.getElementById("userApellido").value = pasajeros[i].apellido;
          document.getElementById("userDNI").value = pasajeros[i].dni;
        }
      }
}

function buscarAsiento (){
  var asiento = document.getElementById("mostrar").textContent;
  var res;
  for(var i = 0; i < pasajeros.length; i++){
    if(asiento == pasajeros[i].asiento){
      res = true;
    }
    else{
      res = false;
    }
  }
  return res;
}


function reservar (){
  let nombre = document.getElementById("userNombre").value;
  let apellido = document.getElementById("userApellido").value;
  let dni = document.getElementById("userDNI").value;
  let asiento = document.getElementById("mostrar").textContent;
  let imprimir = document.getElementById("imprimir");
  let comprobar = buscarAsiento();
    
  if(comprobar == true){
      
    alert("El asiento ya está ocupado");
      
  }
  else if((nombre == "") && (apellido == "") && (dni == "")){
      swal ( "Faltan Datos" ,  "vacío!" ,  "error" );
    }
  else if ((nombre == "") || (apellido == "") || (dni == "")){
      swal ( "Oops" ,  "Al parecer alguno de los datos esta vacío!" ,  "error" );
    }
  else if(asiento == ""){
      swal ( "Falta escoger asiento" ,  "elige un asiento!" ,  "error" );
  }
  else {
      pasajeros.push(new Pasajero(nombre, apellido,dni,asiento));
      imprimir.innerHTML = "<h2 class='selection'>ASIENTO ELEGIDO</h2> <div class='elem'></br><span class='objText'>Nombre:</span> " + nombre + "</br><span class='objText'>Apellido: </span>" + apellido + "</br><span class='objText'>DNI:  </span>" + dni + "</br><span class='objText'>Asiento:</span>" + asiento + "</div>";
      limpiar();
    }
  let x = seats.indexOf(asiento);
  asientos[x].style.backgroundColor = "#73C6B6";
}

function listar (){
  let listado = document.getElementById("listado");
  let lista = "<h4 class='allList'>LISTA DE ASIENTOS ELEGIDOS</h4>";
  if(datos == []){
    alert("Todos los asientos están vacíos")
  } else {
    for (var i = 0; i < pasajeros.length; i++){
      let datos = pasajeros[i];
      let sNombre = datos.nombre ;
      let sApellido = datos.apellido;
      let sDni = datos.dni;
      let sAsiento = datos.asiento;
      lista += "<div class='seatsCheck'><strong> Asiento: " + sAsiento + "</strong> <br/>Nombre:" + sNombre + "</br>Apellido: " + sApellido + "</br> DNI: " + sDni + "</div>";
      listado.innerHTML = lista;
    }
  }
}


function limpiar(){
  var inputs = document.getElementsByTagName("input");
  var espacioAsiento = document.getElementById("mostrar");
  for(var i = 0; i < inputs.length; i++){
    inputs[i].value = "";
  }
  espacioAsiento.innerHTML = "";
}
function limpiarLista(){
  var listado = document.getElementById("listado");
  listado.innerHTML = "";
}

function limpiarReservar(){
  var espacio = document.getElementById("imprimir");
  espacio.innerHTML = "";
  limpiar();
}