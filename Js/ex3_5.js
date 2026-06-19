function calcularRaiz(){
    var inNumero = document.getElementById('inNumero');
    var outResposta = document.getElementById('outResposta');

    var numero = Number(inNumero.value);
    // se não preencheu
    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido...')//exibe alerta
        inNumero.focus();
        return;
    }

    var raiz = Math.sqrt(numero); //calcula a razi q. do numero

    if(raiz == Math.floor(raiz)) {
        outResposta.textContent = 'Raiz: ' + raiz
    } else{
        outResposta.textContent = 'Não há raiz exata para ' + numero;
    }
}
//cria referencia ao elemento btExibir e registra evento que ira carregar function
var btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularRaiz);