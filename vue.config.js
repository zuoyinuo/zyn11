const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  lintOnSave:false, // 解决代码格式化
  devServer: { // 解决跨域
    "proxy": {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        PathRewrite: {
          "/api": ""
        }
      }

    }
  }
})


