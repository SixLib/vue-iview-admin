module.export = {
    baseUrl: '/api',
    devServer: {
        proxy: {
            '/api': {
                target: '/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}