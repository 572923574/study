"use strict";
const Controller = require("egg").Controller;

class girlsManage extends Controller {
  async searchGirl() {
    const { ctx } = this;
    const res = await ctx.service.testdb.searchGirl();
    ctx.body = res;
  }

  async addGirl() {
    const { ctx } = this;
    const params = {
      name: "小白",
      age: 18,
    };

    const res = await ctx.service.testdb.addGirl(params); 
    ctx.body = res;
  }

  async delGirl() {
    const { ctx } = this;
    ctx.body = "删除";
  }

  async updateGirl() {
    const { ctx } = this;
    ctx.body = "更新成功";
  }
}

module.exports = girlsManage;
