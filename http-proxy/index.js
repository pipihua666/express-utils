const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const router = express.Router()

router.use(cors());

router.use('/api', createProxyMiddleware({ target: 'http://10.0.17.83/', changeOrigin: true }), (res) => {
	console.log('res', res);
});

module.exports = router;
