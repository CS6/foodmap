const Koa = require('koa');
const app = new Koa();

app.use( require('koa-static')(__dirname) );

app.listen(8000)

console.log('listening on port 8000');
