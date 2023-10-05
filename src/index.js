import analyzer from "./analyzer.js";

const button = document.getElementById("reset-button");
const textArea = document.querySelector('textarea[name="user-input"]');
const prueba1 = document.querySelector("ul>li:nth-child(1)");
const prueba2 = document.querySelector("ul>li:nth-child(2)");
const prueba3 = document.querySelector("ul>li:nth-child(3)");
const prueba4 = document.querySelector("ul>li:nth-child(4)");
const prueba5 = document.querySelector("ul>li:nth-child(5)");
const prueba6 = document.querySelector("ul>li:nth-child(6)");

button.addEventListener("click", function () {
  textArea.value = "";
  const funcionUno = analyzer.getWordCount(textArea.value);
  prueba1.textContent = "Palabras: " + funcionUno;
});

textArea.addEventListener("input", function () {
  const funcionUno = analyzer.getWordCount(textArea.value);
  prueba1.textContent = "Palabras: " + funcionUno;
});

textArea.addEventListener("input", function () {
  const funcionDos = analyzer.getCharacterCount(textArea.value);
  prueba2.textContent = "Carácteres: " + funcionDos;
});

textArea.addEventListener("input", function () {
  const funcionTres = analyzer.getCharacterCountExcludingSpaces(textArea.value);
  prueba3.textContent = "Carácteres S/E: " + funcionTres;
});

textArea.addEventListener("input", function () {
  const funcionCuatro = analyzer.getAverageWordLength(textArea.value);
  prueba4.textContent = "Promedio Longitud: " + funcionCuatro;
});

textArea.addEventListener("input", function () {
  const funcionCinco = analyzer.getNumberCount(textArea.value);
  prueba5.textContent = "Números: " + funcionCinco;
});

textArea.addEventListener("input", function () {
  const funcionSeis = analyzer.getNumberSum(textArea.value);
  prueba6.textContent = "Suma de Números: " + funcionSeis;
});
