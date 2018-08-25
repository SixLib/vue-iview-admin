module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/vue-iview-admin/" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8090",
        changeOrigin: true
      }
    }
  }
};
