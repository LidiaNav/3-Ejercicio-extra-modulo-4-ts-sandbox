/*Ejercicio 3
Tenemos un servicio de soporte que nos facturan por horas, desarrolla un programa que le indiques el número de horas que ha realizado y calcule el total que hay que pagar.*/

const tarifaHora = 8;

const calculoTarifa = (numero: number): number => {
  return numero * tarifaHora;
};

const handleCalcularClick = () => {
  const horasTrabajadas = (
    document.getElementById("horasTrabajadas") as HTMLInputElement
  ).valueAsNumber;
  const numero: number = horasTrabajadas;
  calculoTarifa(numero);
  //resultado
  const elementoResultado = document.getElementById("resultado");
  if (elementoResultado !== null && elementoResultado !== undefined) {
    elementoResultado.innerText = `Debes pagar: ${calculoTarifa(numero)}`;
  } else {
    console.error(
      "elementoResultado: no se ha encontrado el elemento con id resultado"
    );
  }
};

const botonCalcular = document.getElementById("calculoPagar");
if (botonCalcular !== null && botonCalcular !== undefined) {
  botonCalcular.addEventListener("click", handleCalcularClick);
}
