import { Entity } from "../core/Entity";

export type InsumoProps = {
    name: string
    qtdEmbalagem: number
    valorEmbalagem: number
    unidadeMedida: string
    valorUnitario: number
    createdAt: Date
    updatedAt: Date | null
}

export class Insumo extends Entity<InsumoProps> {
    private constructor(props: InsumoProps, id?: string) {
        super(props, id)
    }

    static create(props: InsumoProps, id?: string) {
        const insumo = new Insumo(props, id)
        return insumo
    }
}