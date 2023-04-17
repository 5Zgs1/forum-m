// postcss.config.js
// postcss配置文件
module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'ios >= 8']
    // },
    // 把px转为rem
    'postcss-pxtorem': {
      // rootValue设置为设计稿的十分之一
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // rootValue: 37.5,
      // 配置要转换的css属性
      //* 表示所有
      propList: ['*']
    }
  }
}
