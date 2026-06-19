function calcularNotas(){
    //cria uma referencia aos elementos da pagina
    var inSaque = document.getElementById('inSaque');
    var outNotaCem = document.getElementById('outNotaCem');
    var outNotaCinquenta = document.getElementById('outNotaCinquenta');
    var outNotaDez = document.getElementById('outNotaDez');

    //Limpa mensagens (caso, segunda execução)
    outNotaCem.textContent = '';
    outNotaCinquenta.textContent = '';
    outNotaDez.textContent = '';

    var saque = Number(inSaque.value);
    //se não prenncheu
    if (saque == 0 || isNaN(saque)) {
        alert('Informe o valor do saque corrente');
        inSaque.focus();
        return;
    }

    //verificar se o saque não multiplo de 10
    if (saque % 10 != 0){
        alert('Valor inválido para notas disponiveis (R$ 10, 50, 100');
        inSaque.focus();
        return;
    }

    var notaCem = Math.floor(saque/100);
    var resto = saque % 100;
    var notaCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    var notaDez = Math.floor(resto / 10);
    //exibe as notas se houver
    if(notaCem >0) {
        outNotaCem.textContent = 'Notas de R$ 100: ' + notaCem;
    }
    if(notaCinquenta >0){
        outNotaCinquenta.textContent = 'Notas de R$ 50: ' + notaCinquenta;
    }
    if (notaDez > 0){
        outNotaDez.textContent = 'Notas de R$ 10: ' + notaDez;
    }
}
var btExibir = document.getElementById('btExibir');
btExibir.addEventListener('click', calcularNotas)