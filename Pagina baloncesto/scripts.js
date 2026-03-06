function mostrarEquipo(id) {
    var equipo = document.getElementById(id);

    if (equipo.style.display === "block") {
        equipo.style.display = "none";
    } else {
        equipo.style.display = "block";
    }
}

function mostrarJugador(id) {
    var jugador = document.getElementById(id);

    if (jugador.style.display === "block") {
        jugador.style.display = "none";
    } else {
        jugador.style.display = "block";
    }
}
