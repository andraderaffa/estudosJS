'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);
    const contar = () => {
        if(tempo === 0){
            pararContagem();
        }
        atualizar (tempo);
        tempo--;
    }
    //Executa um callback a cada tempo
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
    const dataEvento = new Date('2032-09-26 20:00:00');
    const hoje = Date.now();

    //Cálculo entre datas
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante());