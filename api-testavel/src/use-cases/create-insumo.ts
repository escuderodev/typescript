import { Insumo } from "../entities/insumo"

export interface CreateInsumoRequest {
    nome: string
    qtdEmbalagem: number
    valorEmbalagem: number
    unidadeMedida: string
}

export type CreateInsumoResponse = Insumo

export class CreateInsumo {
    async execute(request: CreateInsumoRequest): Promise<CreateInsumoResponse> {
        const { nome, qtdEmbalagem, valorEmbalagem, unidadeMedida } = request
        const insumo = new Insumo(nome, qtdEmbalagem, valorEmbalagem, unidadeMedida)
        return insumo
    }
}