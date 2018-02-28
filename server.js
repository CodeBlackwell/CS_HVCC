'use strict';

const port = process.env.PORT || 3000;
const Koa = require('koa');
const serve = require('koa-static');
const logger = require('koa-logger');
const convert = require('koa-convert');
const router = require('koa-router')();
const cors = require('koa-cors');
const bodyparser = require('koa-bodyparser');

const data = require('./data');

const app = new Koa();
const _use = app.use;

app.use = (x) => _use.call(app, convert(x));
app.use(logger());
app.use(serve('./build'));
app.use(cors(false));
app.use(bodyparser());


router.get('/data', (ctx, next) => {
    console.log(ctx);
    ctx.body = data;
});

app.use(router.routes());

const server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});

