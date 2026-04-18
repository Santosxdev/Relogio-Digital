// Seleciona os elementos HTML onde as horas, minutos e segundos serão exibidos
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Atualiza o relógio a cada segundo
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    // Adiciona um zero à esquerda se o número for menor que 10
    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    // Atualiza o conteúdo dos elementos HTML com as horas, minutos e segundos
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})