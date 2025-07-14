const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

const inputPalpite = document.getElementById('palpite');
const btnChutar = document.getElementById('btnChutar');
const mensagem = document.getElementById('mensagem');
const tentativasRestantes = document.getElementById('tentativasRestantes');

tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;

btnChutar.addEventListener('click', function () {
  const palpite = parseInt(inputPalpite.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Por favor, insira um número entre 1 e 100.";
    return;
  }

  tentativas--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = "Você acertou! Parabéns!";
    btnChutar.disabled = true;
    inputPalpite.disabled = true;
  } else if (tentativas === 0) {
    mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
    btnChutar.disabled = true;
    inputPalpite.disabled = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é maior.";
  } else {
    mensagem.textContent = "O número secreto é menor.";
  }

  tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`;
  inputPalpite.value = "";
  inputPalpite.focus();
});