/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');

describe('Post Endpoints', () => {
  it('should create a new Class', async () => {
    const res = await request(app).post('/classes').send({
      name: 'matematica',
      description: 'abordar operadores',
      video: 'http://youtube.com',
      data_init: '2020-12-02',
      data_end: '2020-12-03',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
  });

  it('should list Class', async () => {
    const res = await request(app).get('/classes');

    expect(res.statusCode).toEqual(200);
  });

  it('It should respond with an class id', async () => {
    const res = await request(app).get('/classes/5fcc7468295b8a6441745826');

    expect(res.body).toHaveProperty('name');
    expect(res.statusCode).toBe(200);
  });
});
