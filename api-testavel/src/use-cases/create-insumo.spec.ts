import { describe, expect, it } from "vitest";
import { CreateInsumo } from "./create-insumo";
import { Insumo } from "../entities/insumo";

describe("=== Create Insumo ===", () => {
    it("should be able to create an insumo", () => {
        const createInsumo = new CreateInsumo()

        expect(createInsumo.execute({
            nome: "Stevia",
            qtdEmbalagem: 1000,
            valorEmbalagem: 90.00,
            unidadeMedida: "GR"
        })).resolves.toBeInstanceOf(Insumo)
    })
})