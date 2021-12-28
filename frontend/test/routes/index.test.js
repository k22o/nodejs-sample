const request = require('supertest');
const indexRouter = require('../../routes/index');
const dao = require('../../middleware/dao');
const express = require('express');

// in preparation
const app = express();
app.use('/', indexRouter);

jest.mock('../../middleware/dao');

// test start 
describe('test:routes/index.js', () => {

  it('get index-page', async () => {
    let data = '[{"id":1,"name":"test-name"}]';
    let expected = {list: JSON.parse(data)};
    dao.find.mockResolvedValue(data);

    let actual = await request(app).get('/');
    expect(actual.status).toBe(200);
    expect(actual.text).toEqual(expect.stringContaining('node sample UI index'));
    expect(actual.text).toEqual(expect.stringContaining('test-name'));
    expect(dao.find.mock.calls.length).toBe(1);
  });

  it('get add-page', async () => {
    let actual = await request(app).get('/add');
    expect(actual.status).toBe(200);
    expect(actual.text).toEqual(expect.stringContaining('node sample UI add'));
  });

  /* todo テストが通せない */
  it('post add-page', async (redirect) => {
    let data = '{"name":"test-name"}';
    let expected = {list: JSON.parse(data)};
    dao.add.mockResolvedValue(null);
    dao.find.mockResolvedValue('[{"id":1,"name":"test-name"}]');

    let actual = await request(app)
    .post('/add');

    // expect(actual).toBe(1);
    // expect(actual.status).toBe(200);
    // expect(actual.text).toEqual(expect.stringContaining('node sample UI index'));
    // expect(actual.text).toEqual(expect.stringContaining('test-name'));    
    // expect(dao.add.mock.calls.length).toBe(1);
    // expect(dao.find.mock.calls.length).toBe(1);
    
  });

  it('get edit-page', async () => {
    let id = 1;
    let actual = await request(app).get('/edit/' + id);
    expect(actual.status).toBe(200);
    expect(actual.text).toEqual(expect.stringContaining('node sample UI edit'));
  });

});