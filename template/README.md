# 注意

## 环境

env 以下不可删除

```js
NODE_ENV = 'production'; //系统打包环境
env = pre; //node实际环境
VUE_APP_ENV = pre; //vue 当前可用环境 开发代码可用
```

## crlf

使用 `npm run line --fix` 可以批量解决 delete cr 错误

## global.d.ts

解决加载图片 样式的无法找到模块的 bug
