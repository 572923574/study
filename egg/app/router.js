'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/lijianguo', controller.home.lijianguo);

  router.get('/lijianguo/index', controller.lijianguo.index);
  router.get('/lijianguo/getGirls', controller.lijianguo.getGirls);
};
