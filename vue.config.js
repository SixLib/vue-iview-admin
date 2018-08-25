module.export = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://121.42.186.91:8090/api/',
                changeOrigin: true
            }
        }
    }
}