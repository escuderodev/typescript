import request from 'supertest';
import { App } from "../src/server"

const { setup, teardown } = require('../src/test/setup.js');

// Setup and Teardown
beforeAll(async () => {
    await setup();
});
  
afterAll(async () => {
    await teardown();
});

const app = new App().getServer()

// Test GetAll
describe('===Testando o metodo GetAll ===', () => {
  it('deve retornar status 200', async () => {
    const response = await request(app).get('/disciplinies');
    expect(response.status).toBe(200);
  });

  it('deve retornar status 404 para rota inexistente', async () => {
    const response = await request(app).get('/rota-inexistente');
    expect(response.status).toBe(404);
  });
});