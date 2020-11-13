import { createProxyMiddleware } from 'http-proxy-middleware';

//proxy to circumvent cors on identity app
const apiProxy = createProxyMiddleware({
    target: 'https://identity.tinajs.dev',
    changeOrigin: true,
    pathRewrite: { [`^/api/proxy`]: '' },
    secure: false,
});

export default apiProxy

