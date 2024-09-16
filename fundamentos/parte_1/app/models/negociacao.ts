export class Negociacao {
    private _data: string
    private _quantidade: number
    private _valor: number

    constructor(data, quantidade, valor) {
        this._data = data
        this._quantidade = quantidade
        this._valor = valor
    }

    get data() {
        return this._data
    }

    get quantidade(): number {
        return this._quantidade
    }

    set quantidade(quantidade: number) {
        this._quantidade = quantidade
    }

    get valor(): number {
        return this._valor
    }

    get volume(): number {
        return this._quantidade * this._valor
    }
}