'use strict';

const Controller = require('egg').Controller;

class LijianguoController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>第一个页面</h1>';
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>一大波美女</h1>');
      }, 5000);
    });
  }
}

module.exports = LijianguoController;
