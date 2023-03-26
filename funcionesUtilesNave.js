
const haLlegadoATierra = (indicadorDestino) => {
    const indicadorTierra = 1;
    return indicadorDestino === indicadorTierra;
}

const esIndicadorPar = (indicadorDestino) => {
    return indicadorDestino % 2 === 0;
}

const esIndicadorMenorAlLimite = (saltos, indicadorDestino) => {
    const limiteInferior = 10000;
    return saltos === 0 && indicadorDestino < limiteInferior;
}

const contarSaltosParalLegarATierra = (saltos, indicadorDestino) => {
    if (esIndicadorMenorAlLimite(saltos, indicadorDestino)) {
        return -1;
    }

    if (haLlegadoATierra(indicadorDestino)) {
        return saltos;
    }
    
    saltos++;
    
    if (esIndicadorPar(indicadorDestino)) {
        indicadorDestino /= 2;
        return contarSaltosParalLegarATierra(saltos, indicadorDestino);
    }
    
    indicadorDestino = indicadorDestino * 3 + 1;
    return contarSaltosParalLegarATierra(saltos, indicadorDestino);
}

export { contarSaltosParalLegarATierra };