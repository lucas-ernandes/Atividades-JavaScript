function converterDuracao(){
    var inTitulo = document.getElementById('inTitulo');
    var inDuracao = document.getElementById('inDuracao');
    var outTitulo = document.getElementById('outTitulo');
    var outResposta = document.getElementById('outResposta');

    var titulo = inTitulo.ariaValueMax;
    var duracao = Number(inDuracao.value);

    //arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60);
    var minutos = duracao % 60;
    //alterar o conteudo dos paragrafos de resposta
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + 'hora(s) e ' + minutos + 'minuto(s)';

}
var btConverter = document.getElementById('btConverter');
btConverter.addEventListener('click', converterDuracao);