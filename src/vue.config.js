module.export = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
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