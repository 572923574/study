"use strict";

const Service = require("egg").Service;
class testdbService extends Service {
  async addGirl(params) {
    try {
      const app = this.app;
      const res = await app.mysql.insert("admin",params);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async delGirl() {}

  async updateGirl() {}
  async searchGirl() {
    try {
      const app = this.app;
      const res = await app.mysql.select("admin");
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = testdbService;
