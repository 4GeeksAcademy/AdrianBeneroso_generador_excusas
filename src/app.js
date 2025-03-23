import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

 let who =['Mi madre','Mi hija','El gato','Mi mujer'];
 let action =['comio','rompio','guardo','salto'];
 let what =['mi proyecto','mi ordenador','el coche','el telefono'];
 let when = ['despues de clase','cuando yo me fui a dormir','mientras hacia ejercicio','durante la comida']

 var who_random = Math.floor(Math.random()* who.length);
 var action_random = Math.floor(Math.random()* who.length);
 var what_random = Math.floor(Math.random()* who.length );
 var when_random = Math.floor(Math.random()* who.length );

 document.getElementById("excuse").innerHTML =  who[who_random] +" " +action[action_random] + " " + what[what_random]+" "+ when[when_random]



};
