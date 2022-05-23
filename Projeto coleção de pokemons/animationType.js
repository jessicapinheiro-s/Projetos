window.onload = function frase () {
    const typeWriter = document.getElementById('typewriter-text');
    const text = 'Bem-vindos(as) a minha coleção.';

    typeWriter.innerHTML = text;
    typeWriter.style.setProperty('--characters', text.length);
}