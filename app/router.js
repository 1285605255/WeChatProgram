'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/', controller.home.index2);
  router.get('/hello', controller.hello.index);
  router.get('/news', controller.news.list);
  router.get('/wechat', controller.wechat.index);
};
