function calcularFuso(){
    var inHoraBrasil = document.getElementById('inHoraBrasil');
    var outraHoraFranca = document.getElementById('outraHoraFranca');

    //obtem e converte o conteudo do campo inHoraBrasil
    var horaBrasil = Number(inHoraBrasil.value);

    //se não preencheu
    if (inHoraBrasil.value == ''|| isNaN(horaBrasil)){
        alert('Informe a hora no Brasil corretamente');
        inHoraBrasil.focus();
        return;
    }
    var horaFranca = horaBrasil + 5;
    //se passar das 24 horas na Franca...
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24;
    }
    outraHoraFranca.textContent = 'Hora na França: ' + horaFranca.toFixed(2);
}
    var btExibir = document.getElementById('btExibir');
    btExibir.addEventListener('click', calcularFuso);