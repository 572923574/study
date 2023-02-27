/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1677032967595_8217';

  // add your middleware config here
  config.middleware = [];


  //csrf enable false
  config.security = {
    csrf:{
      enable:false
    }
  }

  //
  config.view = {
    mapping:{
      '.html':"ejs"
    }
  }


  config.ejs = {
    // delimiter:"$"
  }

  config.session={
    key:"SESSION"
  }

  config.mysql={
    app:true,
    agent:false,
    client:{
      host:'127.0.0.1',
      port:'3306',
      user:'lijianguo',
      password:'Abc18682028219',
      database:'bangsuda'
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
