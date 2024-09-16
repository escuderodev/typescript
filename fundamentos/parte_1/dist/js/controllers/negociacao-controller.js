import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adicionaNegociacao() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionar(negociacao);
        console.log(this.negociacoes.listar());
        this.limparCampos();
    }
    criaNegociacao() {
        const regex = /-/g;
        const data = new Date(this.inputData.value.replace(regex, ','));
        const quantidade = Number(this.inputQuantidade.value);
        const valor = Number(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparCampos() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
