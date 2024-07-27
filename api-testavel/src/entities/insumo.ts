export class Insumo {
    private nome: string
    private qtdEmbalagem: number
    private valorEmbalagem: number
    private valorUnitario: number
    private unidadeMedida: string
    private dataCriacao: Date
    private dataAtualizacao: Date

    constructor(nome: string, qtdEmbalagem: number, valorEmbalagem: number, unidadeMedida: string) {
        this.nome = nome
        this.qtdEmbalagem = qtdEmbalagem
        this.valorEmbalagem = valorEmbalagem
        this.valorUnitario = valorEmbalagem / qtdEmbalagem
        this.unidadeMedida = unidadeMedida
        this.dataCriacao = new Date()
    }

    getNome() {
        return this.nome
    }

    getQtdEmbalagem() {
        return this.qtdEmbalagem
    }

    getValorEmbalagem() {
        return this.valorEmbalagem
    }

    getValorUnitario() {
        return this.valorUnitario
    }

    getUnidadeMedida() {
        return this.unidadeMedida
    }

    getDataCriacao() {
        return this.dataCriacao
    }

    getDataAtualizacao() {
        return this.dataAtualizacao
    }

    atualizaDados(nome: string, descricao: string, qtdEmbalagem: number, valorEmbalagem: number, unidadeMedida: string) {
        this.nome = nome
        this.qtdEmbalagem = qtdEmbalagem
        this.valorEmbalagem = valorEmbalagem
        this.valorUnitario = valorEmbalagem / qtdEmbalagem
        this.unidadeMedida = unidadeMedida
        this.dataAtualizacao = new Date()
    }
}