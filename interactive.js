var nombre_button= document.getElementById ('nombre_button');
var apellido_button= document.getElementById ('apellido_button');
var direccion_button= document.getElementById ('direccion_button');
var cabello_button= document.getElementById('cabello_button')
var comidas_button= document.getElementById('comidas_button')
var h1_title = document.getElementById ('title');

var data_interface = {
    nombre:"Felipe",
    apellido:"Pineda",
    direccion:"Direccion Numero 4, casa 3",
    atributos_dinamicos:{
        cabello:"negro",
        comida_favorita:["pasta","ensalada"]
    }
}

nombre_button.onclick = function() {
    h1_title.innerHTML=data_interface.nombre;
}

apellido_button.onclick = function() {
    h1_title.innerHTML=data_interface.apellido;
}

direccion_button.onclick = function() {
    h1_title.innerHTML=data_interface.direccion;
}
cabello_button.onclick = function() {
    h1_title.innerHTML=data_interface.atributos_dinamicos.cabello;
}

comidas_button.onclick = function() {
    h1_title.innerHTML=data_interface.atributos_dinamicos.comida_favorita[0]+' y '+data_interface.atributos_dinamicos.comida_favorita[1];
}




/*
form.addEventListener("submit", function(e){
    "...."
})

form.onsubmit = function() {

}
*/