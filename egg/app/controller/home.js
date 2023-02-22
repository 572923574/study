'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, lijianguo,egg';
  }

  async lijianguo() {
    const { ctx } = this;
    ctx.body = '<h1>hi, lijianguo,egg</h1>';
  }
}

module.exports = HomeController;

// RESTFUL COntroller 接收请求参数 提供接口
// HTML URL HTML  提供页面
// proxy 代理服务器
