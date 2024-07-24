import request from 'supertest';
import { App } from "../src/server" // Supondo que seu arquivo principal do Express seja `app.ts`

const { setup, teardown } = require('../src/test/setup.js');

// Setup and Teardown
beforeAll(async () => {
    await setup();
});
  
afterAll(async () => {
    await teardown();
});

const app = new App().getServer()

describe('GET /disciplinies', () => {
  it('deve retornar status 200', async () => {
    const response = await request(app).get('/disciplinies');
    expect(response.status).toBe(200);
  });

  it('deve retornar status 404 para rota inexistente', async () => {
    const response = await request(app).get('/rota-inexistente');
    expect(response.status).toBe(404);
  });
});

// Repita para outros endpoints e métodos HTTP (POST, PUT, DELETE, etc.)
