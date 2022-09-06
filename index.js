//创建koa对象
const Koa = require('koa');
const Router = require("koa-router")
const myIp = require('./src/utils/ip');

const app = new Koa();
const router = new Router()

  router.get("/",async(ctx)=>{
    const ip = myIp();
    ctx.body = ip;
  })

  app.use(router.routes());
//绑定端口号
app.listen(3333)