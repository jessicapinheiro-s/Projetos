function enviar() {
    var inNome = document.getElementById("inNome");
    var inSobrenome = document.getElementById("inSobrenome");
    var inNumero = document.getElementById("inNumero");
    var inEmail = document.getElementById("inEmail");
    var inLinguagem = document.getElementById("inLinguagem");
    var outResposta = document.getElementById("outResposta");

    var nome = inNome.value;
    var sobrenome = inSobrenome.value;
    var numero = Number(inNumero.value);
    var email = inEmail.value;
    var linguagem = inLinguagem.value;

    if (inNumero == " " || isNaN(numero)) {
        ("Digite o numero corretamente");
        inNumero.focus();
        return;
    }
    outResposta.textContent = "Seu formulário foi enviado com sucesso!";
}
var btEnviar = document.getElementById("btEnviar");
btEnviar.addEventListener("click", enviar)