import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adicionaNegociacao(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adicionar(negociacao)
        console.log(this.negociacoes.listar())
        this.limparCampos()
    }

    criaNegociacao(): Negociacao {
        const regex = /-/g
        const data = new Date(this.inputData.value.replace(regex, ','))
        const quantidade = Number(this.inputQuantidade.value)
        const valor = Number(this.inputValor.value)
        return new Negociacao(data, quantidade, valor)
    }

    limparCampos(): void {
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }
}