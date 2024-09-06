/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generador() {
  //write your code here
  let excusaFinal = "";

  let parrafo = document.getElementById("excuse");

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let quien = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];

  excusaFinal += quien + " " + accion + " " + que + " " + cuando;
  console.log(excusaFinal);

  parrafo.innerHTML = excusaFinal;

  console.log("Hello Rigo from the console!");
}
// Permite que la página se actualice automáticamente cada 7 segundos
setInterval(generador, 7000);
