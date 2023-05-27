const express = require('express');
const httpProxy = require('./http-proxy')

const app = express();

app.use('/', httpProxy)

app.listen(6666, () => {
	console.log('我正在监听6666端口，别耍小心思哈~')
})