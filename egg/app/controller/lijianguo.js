'use strict';

const Controller = require('egg').Controller;

class LijianguoController extends Controller {
  async index() {
    const { ctx ,app} = this;
    console.log(ctx.session.counter,'counter---------')
    await ctx.render('lijianguo.html',{
      nowTime:app.timeProp,
      id:688,
      name:'小迪',
      age:18,
      skills:['kill']
    })
  }

  async getGirls() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>一大波美女</h1>');
      }, 5000);
    });
  }

  //自由传参
  async getGirl(){
    const {ctx} = this;
    const res = await ctx.service.lijianguo.getGirl('11111')
    ctx.body= res;
  }

  //严格传参模式
  async getGirl2(){
    const {ctx} = this;
    ctx.body =  'getGirl2 name:'+ctx.params.name+',age:'+ctx.params.age
  }
  async add(){
    const {ctx} = this;
    ctx.cookies.set("user","bangsuda.com",{
      maxAge:1000*60*60,
      httpOnly:false,
      encrypt:true,
    })
    ctx.session.userName="lijianguo"
    ctx.body = {
      status:200,
      message:'cookie 增加成功',
      data:ctx.request.body,
      
    }
  }
  async del(){
    const {ctx} = this;
    ctx.cookies.set("user",null)
    ctx.session.userName= null
    ctx.body = {
      status:200,
      message:'cookie 删除成功',
      data:ctx.request.body
    }
  }
  async update(){
    const {ctx} = this;
    ctx.cookies.set("user","lijianguo")
    ctx.session.userName="这是session.userName"
    ctx.body = {
      status:200,
      message:'cookie 修改成功',
      data:ctx.request.body
    }
  }
  async query(){
    const {ctx} = this;
   let cookiesContent =  ctx.cookies.get("user",{encrypt:true,})
   let userName = ctx.session.userName
    ctx.body = {
      status:200,
      message:'cookie 查看成功',
      data:{user:cookiesContent,userName:userName}
    }
  }

  async newContext(){
    const {ctx} = this;
    const params = ctx.params()
    console.log(params,'lijianguo')
    ctx.body = {
      message:"newContext"
    }
  }

  async newRequest(){
    const {ctx} = this;
    const token = ctx.request.token;
    ctx.body={
      status:200,
      token:token
    }
  }
  async newResponse(){
    const {ctx} = this;
    ctx.response.token = 'this is token!'
    const testBase64 = ctx.helper.base64Encode('lijianguo-bangsuda.com')
    ctx.body={
      status:200,
      data:testBase64
    }
  }
}

module.exports = LijianguoController;
