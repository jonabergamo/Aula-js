var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var diaSemana = semana[dataAtual.getDay()]

 
console.log("Hoje é dia " + dia + "/" + mes + " de " + ano + ". Agora são " + horas + ":" + minutos + "h.");
console.log(`E também hoje é ${diaSemana}`)

if (horas < 12) {
    console.log("Bom dia!")
} else if (horas < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}
