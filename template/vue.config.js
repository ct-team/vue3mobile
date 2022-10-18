const buildConfig = require('./build-user/config.js');
const buildTool = require('./build-user/tool.js');
const buildCopy = require('./build-user/copy.js');
const currEnv = process.env.NODE_ENV;
// const path = require('path');
const autoprefixer = require('autoprefixer');
const IS_PROD = currEnv !== 'development';
const env = process.env.env;
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const {
  ElementPlusResolver,
  VantResolver,
} = require('unplugin-vue-components/resolvers');
// let BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
function getPublicPath() {
  if (!IS_PROD) {
    return '/';
  }
  const envSplit = buildConfig.list.find(function (item) {
    return item.mode.indexOf(env) >= 0;
  });
  if (envSplit) {
    return envSplit.url + buildConfig.appUrl;
  }
  return '/';
}
module.exports = {
  //lintOnSave: true,
  pages: buildTool.getPages(env),
  publicPath: getPublicPath(),
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    extract: IS_PROD, // 允许生成 CSS source maps?
    sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
    //requireModuleExtension: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量 （新版本sass-loader的参数改变）
        prependData: buildConfig.globalSass,
      },
      postcss: {
        plugins: buildConfig.px2rem
          ? [
              autoprefixer({
                overrideBrowserslist: ['iOS >= 8', 'Android >= 4.0'],
              }),

              require('postcss-pxtorem')(buildConfig.px2rem),
            ]
          : [
              autoprefixer({
                overrideBrowserslist: ['iOS >= 8', 'Android >= 4.0'],
              }),
            ],
      },
    },
  },
  // 所有 webpack-dev-server 的选项都支持。
  devServer: buildConfig.devServer,
  chainWebpack: (config) => {
    // 添加分析工具
    config
      .plugin('webpack-bundle-analyzer')
      .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
          openAnalyzer: false,
        },
      ]);
  },
  configureWebpack: (config) => {
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()],
      })
    );
    config.plugins.push(
      Components({
        resolvers: [ElementPlusResolver(), VantResolver()],
      })
    );
    if (IS_PROD) {
      config.devtool = 'source-map';

      config.plugins.push({
        apply: (compilation) => {
          compilation.hooks.done.tap('succeedModule', () => {
            buildCopy.init(env);
          });
        },
      });
    }
  },
};
