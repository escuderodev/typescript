import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adicionaNegociacao(): void {
        const negociacao = this.criaNegociacao()
        console.log(negociacao)
    }

    criaNegociacao(): Negociacao {
        const regex = /-/g
        const data = new Date(this.inputData.value.replace(regex, ','))
        const quantidade = Number(this.inputQuantidade.value)
        const valor = Number(this.inputValor.value)
        return new Negociacao(data, quantidade, valor)
    }
}