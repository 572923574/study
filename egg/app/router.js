"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const counter = app.middleware.counter()
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/lijianguo", counter,controller.home.lijianguo);

  router.get("/lijianguo/index", controller.lijianguo.index);
  router.get("/lijianguo/getGirls", controller.lijianguo.getGirls);
  router.get("/lijianguo/getGirl", controller.lijianguo.getGirl);
  router.get("/lijianguo/getGirl2/:name/:age", controller.lijianguo.getGirl2);
  router.post("/add", controller.lijianguo.add);
  router.post("/update", controller.lijianguo.update);
  router.post("/del", controller.lijianguo.del);
  router.post("/query", controller.lijianguo.query);
  router.get("/testGetGirl", controller.home.testGetGirl);
  
  router.post("/newContext", controller.lijianguo.newContext);
  router.post("/newRequest", controller.lijianguo.newRequest);
  
  router.post("/newResponse", controller.lijianguo.newResponse);
  
  router.post("/addGirl", controller.girlsManage.addGirl);
  router.post("/delGirl", controller.girlsManage.delGirl);
  router.post("/updateGirl", controller.girlsManage.updateGirl);
  router.post("/searchGirl", controller.girlsManage.searchGirl);
};
