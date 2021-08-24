'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const q = ctx.query;
    const signature = q.signature;
    console.log(q);
    const token = 'firefly';
    const echostr = q.echostr;
    const timestamp = q.timestamp;
    const nonce = q.nonce;
    // eslint-disable-next-line no-array-constructor
    const array = new Array(token, timestamp, nonce);
    array.sort();
    const _signature = crypto.createHash('sha1').update(array.toString().replace(/,/g, ''), 'utf-8').digest('hex');
    console.log(_signature);
    if (_signature === signature) {
      ctx.body = `${echostr}`;
    // eslint-disable-next-line keyword-spacing
    }else {
      ctx.body = '...';
    }
  }
}

module.exports = HomeController;
