export class NegociacaoController {
    private inputData
    private inputQuantidade
    private inputValor

    constructor() {
        this.inputData = document.getElementById("data")
        this.inputQuantidade = document.getElementById("quantidade")
        this.inputValor = document.getElementById("valor")
    }

    adicionaNegociacao() {
        console.log(this.inputData.value)
        console.log(this.inputQuantidade.value)
        console.log(this.inputValor.value)
    }
}