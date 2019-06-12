# sao-simple-web

[![babel](https://img.shields.io/badge/babel-v7.4.5-blue.svg)](https://babeljs.io/) [![webpack](https://img.shields.io/badge/webpack-v4.33.0-blue.svg)](https://github.com/webpack/webpack/releases) [![html-webpack-plugin](https://img.shields.io/badge/html--webpack--plugin-v4.0.0--beta-orange.svg)](https://www.npmjs.com/package/html-webpack-plugin) [![mini-css-extract-plugin](https://img.shields.io/badge/mini--css--extract--plugin-v0.7.0-blue.svg)](https://www.npmjs.com/package/mini-css-extract-plugin)


> 简单网页应用生成器

## 如何使用

首先安装[SAO](https://github.com/saojs/sao)。

```bash
yarn global add sao
# or
npm i -g sao
```

然后执行以下命令创建你的网页应用。

```bash
sao lpreterite/sao-simple-web my-project
```

## 特征

- 基于`postcss`提供scss和precss两种CSS编码风格
- 基于`babel@7`提供es6/7的JS编码风格和特性
- 基于`webpack`进行构建
- 样式基于`autoprefixer`处理兼容
- 样式基于`cssnano`处理压缩
- 基于`webpack`使用`imagemin-webpack-plugin`插件以复制的方式压缩图片
- CSS样式与JS命令基于`webpack`使用`html-webpack-plugin`和`mini-css-extract-plugin`自动添加至HTML模板

## License

MIT &copy; [lpreterite](lpreterite)
