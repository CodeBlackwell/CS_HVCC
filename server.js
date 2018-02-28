'use strict';

const port = process.env.PORT || 3000;
const Koa = require('koa');
const serve = require('koa-static');
const logger = require('koa-logger');
const convert = require('koa-convert');
const router = require('koa-router')();
const cors = require('koa-cors');
const bodyparser = require('koa-bodyparser');
const jwt = require('koa-jwt');
const jwksRsa = require('jwks-rsa');

const data = require('./data');

const app = new Koa();
const _use = app.use;

app.use = (x) => _use.call(app, convert(x));
app.use(logger());
app.use(serve('./build'));
app.use(cors(false));
app.use(bodyparser());
app.use(jwt({
    secret: jwksRsa.koaJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 2,
        jwksUri: `${jwksHost}/.well-known/jwks.json`
    }),
    audience,
    issuer,
    algorithms: [ 'RS256' ]
}));


router.get('/data', (ctx, next) => {
    console.log(ctx);
    ctx.body = data;
});
app.use(router.middleware());
app.use(router.routes());

const server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});

