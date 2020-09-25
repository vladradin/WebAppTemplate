import 'reflect-metadata';
import express from 'express';

const app = express();

app.get('/test', (req, rsp) => {
    rsp.send('salut');
})
const path = './controllers/login.controller';
var d = require(path);

console.log(d.LoginController)

app.listen(4100, () => console.log("started server"));