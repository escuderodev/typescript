import { Insumo, InsumoProps } from "../../models/insumo/Insumo";
import { InsumoRepository } from "../../models/insumo/InsumoRepository";

export class InsumoCreateService {
    constructor(readonly repository: InsumoRepository) {
    }

    async execute(name: string, qtdEmbalagem: number, valorEmbalagem: number, unidadeMedida: string) {

        const insumoProps: InsumoProps = {
            name: name,
            qtdEmbalagem: qtdEmbalagem,
            valorEmbalagem: valorEmbalagem,
            unidadeMedida: unidadeMedida,
            valorUnitario: valorEmbalagem / qtdEmbalagem,
            createdAt: new Date(),
            updatedAt: null
        }

        const insumo = Insumo.create(insumoProps)
    }
}