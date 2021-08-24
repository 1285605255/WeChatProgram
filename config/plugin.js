/* eslint-disable eggache/no-unexpected-plugin-keys */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    // eslint-disable-next-line eggache/no-unexpected-plugin-keys
    nunjucks: {
      enable: true,
      package: 'egg-view-nunjucks',
    },
    robot: {
      ua: [
        /Baiduspider/i,
      ],
    },
  },
};
