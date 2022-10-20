const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();
const port = 3000;

router.get('/', (ctx, next) => {
    ctx.body = "<h2>Hello, Index Page</h2>"
});

router.get('/about', (ctx, next) => {
    ctx.body = "<h2>Hello, About Page</h2>"
});

router.get('/contact', (ctx, next) => {
    ctx.body = "<h2>Hello, Contact Page</h2>"
});


app.use(router.routes())

app.listen(port, () => {
    console.log(`Server running on https://localhost:${port}`)
});