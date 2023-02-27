'use strict'

const Service = require("egg").Service;

class LijianguoService extends Service{
  async getGirl(id){
    return{
      id:id,
      name:'赵丽颖',
      age:20
    }
  }
}

module.exports = LijianguoService