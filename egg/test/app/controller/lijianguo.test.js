'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('lijianguo-index', () => {
  it('lijianguo index page', () => {
    console.log(assert);
    return app.httpRequest().get('/lijianguo/index').expect(200)
      .expect('<h1>第一个页面</h1>');
  });

  it('lijianguo getGirls page', async () => {
    return await app.httpRequest().get('/lijianguo/getGirls').expect(200)
      .expect('<h1>一大波美女</h1>');
  });
});
