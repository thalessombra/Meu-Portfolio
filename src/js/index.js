const botaoMostrarProjetos = document.querySelector('.btn');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click', () => {

    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
    botaoMostrarProjetos.classList.add('remover');
});