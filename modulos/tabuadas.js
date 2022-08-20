/*************************************************************************
 * Objetivo: Arquivo que contem todas as funcoes para calculos matematicos
 * Autor: Leonardo Moreira
 * Data Criacao: 01/08/2022
 * Versao: 1.0
 ************************************************************************/

const { exit } = require("process")

function table (valorInicial, valorLimite, tabuadaInicial, tabuadaLimite) {

    let result
    for (let i = tabuadaInicial; i <= tabuadaLimite; i++) {
        console.log(`\ntabuada do [${i}]\n`)
     for(let c = valorInicial;c <= valorLimite; c++){
        result = i * c
        console.log(`${i}x${c}=${result}`);
       }
    }
}

module.exports = { table }