const router = require('koa-router')()
const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  info: {
    version: '1.0.0',
    description: 'koa2_nodejs_blog',
    title: 'Koa2_server Swagger',
    contact: {
      name: 'Contact developers',
      url: 'https://mail.qq.com/',
      email: '741167479@qq.com'
    },
    // 开源协议
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  host: 'localhost:3000',
  basePath: '/' // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // 写有注解的router的存放地址
};

const swaggerSpec = swaggerJSDoc(options)

// 通过路由获取生成的注解文件
router.get('/swagger.json', async function (ctx) {
  ctx.set('Content-Type', 'application/json');
  ctx.body = swaggerSpec;
})

module.exports = router
//将页面暴露出去