let jugador;
let pc;

jugador = prompt("Elija: 1- piedra, 2-papel, 3-tijera");
let resultado = " ";



for (let i = 0; i < 3; i++) {
  // Seleccionar la elección del jugador y de la computadora
  jugador = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"));
  pc = Math.floor(Math.random() * 3) + 1; // Generar un número aleatorio entre 1 y 3 para la elección de la computadora

  // Mostrar las elecciones
  console.log("Jugador: " + obtenerElección(jugador));
  console.log("Computadora: " + obtenerElección(pc));

  // Determinar el resultado del juego
  if (jugador === pc) {
    alert("Empate");
  } else if ((jugador === 1 && pc === 3) || (jugador === 2 && pc === 1) || (jugador === 3 && pc === 2)) {
    alert("¡Ganaste!");
  } else {
    alert("Perdiste");
  }
}

// Función para obtener la elección en forma de texto
function obtenerElección(numero) {
  switch (numero) {
    case 1:
      return "Piedra";
    case 2:
      return "Papel";
    case 3:
      return "Tijera";
    default:
      return "Elección incorrecta";
  }
}
