const request = require('supertest');
const indexRouter = require('../../routes/index');
const repository = require('../../middleware/repository');
const express = require('express');

// in preparation
const app = express();
app.use('/service/v1/member', indexRouter);

jest.mock('../../middleware/repository');

// test start 
describe('test:routes/index.js', () => {

  it('findAll-method', async () => {
    let expected = [{"id":1, "name":"test1"}];
    repository.find.mockResolvedValue(expected);
    let actual = await request(app).get('/service/v1/member');

    expect(actual.status).toBe(200);
    expect(actual.body).toEqual(expected);
    expect(repository.find.mock.calls.length).toBe(1);    
  });

  it('get-method', async () => {
    let id = 1;
    let expected = {"id":id, "name":"test1"};
    repository.get.mockResolvedValue(expected);
    let actual = await request(app).get('/service/v1/member/' + id);
    
    expect(actual.status).toBe(200);
    expect(actual.body).toEqual(expected);
    expect(repository.get.mock.calls.length).toBe(1);    
  });

  it('add-method', async () => {
    let input = {"affectedRows":1};
    let expected = {"affectedRows":1};
    repository.add.mockResolvedValue(expected);
    let actual = await request(app)
    .post('/service/v1/member')
    .send(input);

    expect(actual.status).toBe(200);
    expect(actual.body).toEqual(expected);
    expect(repository.add.mock.calls.length).toBe(1);    
  });
  
  it('update-method', async () => {
    let id = 1;
    let input = {"id":id, "name":"test-update"};
    let expected = {"id":id, "name":"test-update"};
    repository.update.mockResolvedValue(expected);
    let actual = await request(app)
    .patch('/service/v1/member/' + id)
    .send(input);

    expect(actual.status).toBe(200);
    expect(actual.body).toEqual(expected);
    expect(repository.update.mock.calls.length).toBe(1);    
  });

  it('delete-method', async () => {
    let id = 1;
    let expected = {"affectedRows":1};
    repository.remove.mockResolvedValue(expected);
    let actual = await request(app).delete('/service/v1/member/' + id);
    
    expect(actual.status).toBe(200);
    expect(actual.body).toEqual(expected);
    expect(repository.remove.mock.calls.length).toBe(1);    
  });
});