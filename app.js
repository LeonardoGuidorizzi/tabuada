/*************************************************************************
 * Objetivo: Arquivo que contem todas as funcoes para calculos matematicos
 * Autor: Leonardo Moreira
 * Data Criacao: 01/08/2022
 * Versao: 1.0
 ************************************************************************/

const { table } = require('./modulos/tabuadas')
var readline = require('readline')
const { exit } = require('process')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// entrada de dados 
entradaDados.question('Digite a tabuada inicial\n', function (inicial) {
    let tabuadaInicial = inicial
    if (inicial == '') {
        console.log('Preencha o valor da Tabuada inicial')
        exit()
    }
    if (inicial < 2 || inicial < 100) {
        console.log('Coloque um valor entre 2 e 100')
        exit()
    }
    entradaDados.question('Digite a tabuada final\n', function (limite) {
        let tabuadaLimite = limite
        if (limite == '') {
            console.log('Preencha o valor da Tabuada final')
            exit()
        }
        if (inicial < 2 || inicial < 100) {
            console.log('Coloque um valor entre 2 e 100')
            exit ()
        }
        entradaDados.question('Digite o primero contador\n', function (inicial) {
            let valorInicial = inicial
            if (inicial == '') {
                console.log('coloque o numero que a tabuada vai começar')
                exit()
            }
            if (inicial < 1 || inicial < 50){
                console.log('Coloque um numero entre 1 e 50')
                exit()
            }
            entradaDados.question('Digite o ultimo contador\n', function (limite) {
                let valorLimite = limite
                if (limite == '') {
                    console.log('coloque o numero que a tabuada vai terminar')
                    exit()
                }
                if (inicial < 1 ||inicial < 50){
                    console.log('Colque um numero entre 1 e 50')
                    exit()
                }
                table(valorInicial, valorLimite, tabuadaInicial, tabuadaLimite)
                exit()
            })
        })
    })
})

