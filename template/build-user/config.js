module.exports = {
  checkAppId: '',
  appVersion: '1.0.0', // 项目版本
  appUrl: '/static/tcy365-test/', // 项目路径  如   /static/mobile/test/
  list: [
    {
      title: '1505-stable',
      url: '//static.tcy365.org:1505',
      mode: 'stable',
      env: 1505,
    },
    {
      title: '1507-test',
      url: '//static.tcy365.org:1507',
      mode: 'ctest',
      env: 1507,
    },
    {
      title: '1506-develop',
      url: '//static.tcy365.org:1506',
      mode: 'dev',
      env: 1506,
    },
    {
      title: '2505-pre',
      url: '//static.tcy365.com:2505',
      mode: 'pre',
      env: 2505,
    },
    {
      title: '80-static',
      url: '//static.tcy365.com',
      mode: 'production',
      env: 'production',
    },
  ],
  px2rem: {
    rootValue: 100, // 换算的基数
    selectorBlackList: ['van-'], // 忽略转换正则匹配项 ['van-']
    propList: ['*'],
    unitPrecision: 6,
    mediaQuery: true,
    replace: true,
    exclude: /node_modules/,
  },
  //px2rem: null,
  globalSass: '', //向全局sass样式传入共享的全局变量 如`@import "~@/assets/scss/index.scss";`
  isFile: false, //是否使用文件夹
  showPage: [], //["weixin", "sdw"]
  devServer: {
    //host: 'localhost',
    disableHostCheck: true,
    port: 1506, // 端口号
    https: false,
    open: true, // 配置自动启动浏览器
    openPage: 'index.html',
    // 配置多个代理
    proxy: {
      '/api': {
        target: 'http://yapi.tcy365.org:3000/mock/405/', // 本地模拟数据服务器
        changeOrigin: true,
        logLevel: 'debug', //是否输出请求log
      },
    },
  },
};
