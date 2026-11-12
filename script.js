
let porcentajeNivel=0;

// codigo para el formulario de la Mision 1

const formM1 = document.querySelector("#form-arduino");
const msg= document.querySelector("#mensajeM1");
const boton = document.querySelector("#comprobar-mision1");
const opciones1 = document.querySelectorAll('input[name="mision1"]');
const opcionCorrecta=document.querySelector("#correcta-m1");

formM1.addEventListener("submit", function (event) {
  event.preventDefault();
  const marcada = document.querySelector('input[name="mision1"]:checked');
  msg.classList.remove("ok", "error");
  if (marcada === null) {
    msg.textContent = "Elige una opción";
  } else if (marcada.value === "b") {
    msg.textContent = "¡Correcto!";
    msg.classList.add("ok");
    cambiarNivel(20);
    marcada.classList.add("ok");
    for (let j = 0; j < opciones1.length; j++) {
        opciones1[j].disabled = true;
    }
    boton.disabled = true;

       
  } else {
    msg.textContent = "Incorrecto, vuelve a intentar.";
    msg.classList.add("error");
    cambiarNivel(0);
  }
});

// codigo para los 3 formulario de la Mision 2

const formM21 = document.querySelector("#form-sensores1");
const msg2= document.querySelector("#mensajeM21");
const boton21 = document.querySelector("#comprobar-mision21");
const opciones21 = document.querySelectorAll('input[name="mision21"]');
let todoOk=[0,0,0]; //vector para saber si las 3 actividades de la mision estan bien

formM21.addEventListener("submit", function (event) {
  event.preventDefault();
  const marcada = document.querySelector('input[name="mision21"]:checked');
  msg2.classList.remove("ok", "error");
  if (marcada === null) {
    msg2.textContent = "Elige una opción";
  } else if (marcada.value === "b") {
    msg2.textContent = "¡Correcto!";
    msg2.classList.add("ok");
    todoOk[0]=1;
    for (let j = 0; j < opciones21.length; j++) {
        opciones21[j].disabled = true;
    }
    boton21.disabled = true;
    if (todoOk[0]===1 && todoOk[1]===1 && todoOk[2]===1 ){cambiarNivel(40);}
  } else {
    msg2.textContent = "Incorrecto, vuelve a intentar.";
    msg2.classList.add("error");
    cambiarNivel(20);
    todoOk[0]=0;
  }
  
});

const formM22 = document.querySelector("#form-sensores2");
const msg3= document.querySelector("#mensajeM22");
const boton22 = document.querySelector("#comprobar-mision22");
const opciones22 = document.querySelectorAll('input[name="mision22"]');

formM22.addEventListener("submit", function (event) {
  event.preventDefault();
  const marcada = document.querySelector('input[name="mision22"]:checked');
  msg3.classList.remove("ok", "error");
  if (marcada === null) {
    msg3.textContent = "Elige una opción";
  } else if (marcada.value === "a") {
    
    msg3.textContent = "¡Correcto!";
    msg3.classList.add("ok");
    todoOk[1]=1;
    for (let j = 0; j < opciones22.length; j++) {
        opciones22[j].disabled = true;
    }
    boton22.disabled = true;
    if (todoOk[0]===1 && todoOk[1]===1 && todoOk[2]===1 ){cambiarNivel(40);}
  } else {
    msg3.textContent = "Incorrecto, vuelve a intentar.";
    msg3.classList.add("error");
    cambiarNivel(20);
    todoOk[1]=0;
  }
  
});

const formM23 = document.querySelector("#form-sensores3");
const msg4= document.querySelector("#mensajeM23");
const boton23 = document.querySelector("#comprobar-mision23");
const opciones23 = document.querySelectorAll('input[name="mision23"]');

formM23.addEventListener("submit", function (event) {
  event.preventDefault();
  const marcada = document.querySelector('input[name="mision23"]:checked');
  msg4.classList.remove("ok", "error");
  if (marcada === null) {
    msg4.textContent = "Elige una opción";
  } else if (marcada.value === "c") {
    msg4.textContent = "¡Correcto!";
    msg4.classList.add("ok");
    todoOk[2]=1;
    for (let j = 0; j < opciones23.length; j++) {
        opciones23[j].disabled = true;
    }
    boton23.disabled = true;
    if (todoOk[0]===1 && todoOk[1]===1 && todoOk[2]===1 ){
    cambiarNivel(40);
    }
  } else {
    msg4.textContent = "Incorrecto, vuelve a intentar.";
    msg4.classList.add("error");
    cambiarNivel(20);
    todoOk[2]=0;
  }
   
});

// funcion para cambiar de nivel cada vez que responde bien cada mision.
// va cambiando la barra y el nivel en el encabezado
// no logre aun controlar que no se pueda cambiar lo que ya contesto...

function cambiarNivel(n) {
  const nivel= document.querySelector("#nivel-avance");
  const txtNivel=document.querySelector("#txtNivel");
  //let clase="nivel-avance-"+n;
  //nivel.classList.remove('nivel-avance-0','nivel-avance-20','nivel-avance-40','nivel-avance-60','nivel-avance-80','nivel-avance-100' )
  //nivel.classList.add(`${clase}`);
  //progresoEl.style.width = porcentaje + "%";
  nivel.style.width= n + "%";
  if (n===0){
    txtNivel.textContent="-";
  }else if (n===20){
    txtNivel.textContent="Novato";
  }else if (n===40){
    txtNivel.textContent="Asistente Jr";
  }else if (n===60){
    txtNivel.textContent="Asistente Sr";
  }else if (n===80){
    txtNivel.textContent="Técnico de la Nave";
  }else if (n===100){
    txtNivel.textContent="Programados Arduino";
  }
}

// codigo para el formulario de la Mision 3
const pista= document.querySelector("#pista");
const botonPista = document.querySelector("#btnPista");
let todoOk3=[0,0]; //vector para saber si las 2 opciones son correctas

botonPista.addEventListener("click", function () {
  pista.classList.toggle("oculto");
  if (pista.classList.contains("oculto")   ) {
    botonPista.textContent="💡 Pista";
  } else {
    botonPista.textContent="🙈 Ocultar pista";
  }
});

const formM3 = document.querySelector("#form-actuadores");
const respuesta1 = document.querySelector("#respuesta1");
const respuesta2 = document.querySelector("#respuesta2");
const respuesta3 = document.querySelector("#respuesta3");
const msgM31 = document.querySelector("#mensajeM31");
 
formM3.addEventListener("submit", function (event) {
  event.preventDefault();
  const limpio1 = respuesta1.value.trim().toLowerCase();
  const limpio2 = respuesta2.value.trim().toLowerCase();
  const limpio3 = respuesta3.value.trim().toLowerCase();
  msgM31.classList.remove("ok", "error");
  if (limpio1 === "" || limpio2 === "" || limpio3 === ""){
     msgM31.textContent = "Escribe todas las respuestas";
  } else if ((limpio1 === "led") && (limpio2 === "zumbador") && (limpio3 === "servomotor")){
    msgM31.textContent = "¡Correcto!";
    msgM31.classList.add("ok");
    todoOk3[0]=1;
    respuesta1.disabled=true; 
    respuesta2.disabled=true;
    respuesta3.disabled=true;
    if (todoOk3[0]===1 && todoOk3[1]===1){
    cambiarNivel(60);
    }
  } else {
    msgM31.textContent = "Algunas de las palabras es incorrecta";
    msgM31.classList.add("error");
    todoOk3[0]=0;
    cambiarNivel(40);
  }
});


const opcionesM3= document.querySelectorAll(".boton-opcion");
// A cada una, al tocarla, desmarca todas y marca solo la tocada
 
for (const o of opcionesM3) {
  o.addEventListener("click", function (event) {
    for (const otro of opcionesM3) {
      otro.classList.remove("elegida");
    }
    event.target.classList.add("elegida");
  });
}

// codigo para los botones de la mision 3, busque en internet como corregirlos y mostrar mensaje
const botonesM3 = document.querySelectorAll('.desafio-mision3 .boton-opcion');
const msgM32 = document.getElementById('mensajeM32');

botonesM3.forEach(boton => {
    boton.addEventListener('click', function() {
        msgM32.classList.remove("ok", "error");
        // Verificamos el atributo data-respuesta del botón presionado
        if (this.dataset.respuesta === "correcta") {
            msgM32.textContent = "¡Correcto! El Motor CC es el encargado de hacer girar las hélices de ventilación.";
            msgM32.classList.add("ok");
            botonesM3.forEach(btn => btn.disabled = true);
            todoOk3[1]=1;
            if (todoOk3[0]===1 && todoOk3[1]===1  ){
            cambiarNivel(60);
            }
        } else {
            msgM32.textContent = "Respuesta incorrecta. Ese componente no solucionará la falla de ventilación. ¡Inténtalo de nuevo!";
            msgM32.classList.add("error");
            todoOk3[1]=0;
            cambiarNivel(40);
        }
    });
});

// Codigo para formulario Mision 4 - codigo sugerido por docente 
const formulario = document.querySelector("#form-sala");
const cartel = document.querySelector("#mensajeM4");
const boton4 = document.querySelector("#comprobar-mision4");
const opciones4 = document.querySelectorAll('input[name="errores"]');

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();
    cartel.classList.remove("ok", "error");
    // Capturamos las opciones seleccionadas
    const casillasMarcadas = document.querySelectorAll('input[name="errores"]:checked');

    // Verificamos que haya seleccionado alguna opción
    if (casillasMarcadas.length === 0) {
        cartel.textContent = "⚠️ Selecciona al menos una opción.";
        //cartel.className = "mensaje incorrecto";
        cartel.classList.add("error");
        return;
    }

    // Guardamos los valores seleccionados
    const respuestas = [];

    casillasMarcadas.forEach(function(casilla) {
        respuestas.push(casilla.value);
    });

    // Comprobamos las respuestas correctas
    const tieneGND = respuestas.includes("gnd");
    const tienePinDigital = respuestas.includes("pin-digital");

    // Comprobamos si seleccionó opciones incorrectas
    const cantidadCorrectas = respuestas.length === 2;

    if (tieneGND && tienePinDigital && cantidadCorrectas) {

        cartel.textContent = "🎉 ¡Excelente trabajo! Identificaste correctamente los dos errores del circuito.";
        //cartel.className = "mensaje correcto";
        cartel.classList.add("ok");
        for (let j = 0; j < opciones4.length; j++) {
          opciones4[j].disabled = true;
        }
        boton4.disabled = true;
        cambiarNivel(80);
        

    } else {

        cartel.textContent = "⚠️ No está del todo bien. Revisa las conexiones del circuito e inténtalo nuevamente.";
        //cartel.className = "mensaje incorrecto";
        cartel.classList.add("error");
        cambiarNivel(60);
    }

});


// habilitar o desabilitar secciones

