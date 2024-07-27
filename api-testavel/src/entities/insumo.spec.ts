import { test, expect } from "vitest"
import { Insumo } from "./insumo"

test('=== teste, objeto criado deve ser uma instância de insumo ===', () => {
    const insumo = new Insumo('Xilitol', 1000, 70.00, 'GR')
    expect(insumo).toBeInstanceOf(Insumo)
})

test('=== teste, objeto criado deve possuir o nome igual à Xilitol ===', () => {
    const insumo = new Insumo('Xilitol', 1000, 70.00, 'GR')
    expect(insumo.getNome()).toEqual('Xilitol')
})

test('=== teste, ao criar um insumo, o valor unitário deve ser calculado ===', () => {
    const insumo = new Insumo('Xilitol', 1000, 70.00, 'GR')
    expect(insumo.getValorUnitario()).toBe(0.07)
})