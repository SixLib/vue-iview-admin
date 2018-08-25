module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                changeOrigin: true
            }
        }
    }
}