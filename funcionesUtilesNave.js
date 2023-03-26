
/**
 * 
 * @param {Number} indicadorDestino 
 * @returns {Boolean}
 */
const haLlegadoATierra = (indicadorDestino) => {
    const indicadorTierra = 1;
    return indicadorDestino === indicadorTierra;
}

/**
 * 
 * @param {Number} indicadorDestino 
 * @returns {Boolean}
 */
const esIndicadorPar = (indicadorDestino) => {
    return indicadorDestino % 2 === 0;
}

/**
 * 
 * @param {Number} saltos 
 * @param {Number} indicadorDestino 
 * @returns {Boolean}
 */
const esIndicadorMenorAlLimite = (saltos, indicadorDestino) => {
    const limiteInferior = 10000;
    return saltos === 0 && indicadorDestino < limiteInferior;
}

/**
 * 
 * @param {Number} saltos 
 * @param {Number} indicadorDestino 
 * @returns {Number}
 */
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