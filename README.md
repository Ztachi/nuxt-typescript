# 项目
朴新在线PC学生端官网

# 描述
朴新在线PC学生端官网服务器端渲染版本。以nuxt为前端基本框架，elementUI为UI框架。koa为服务器端框架，pm2进程守护，脚本由typescript(javascript超集)编写。

# 安装
1. 安装nodejs。（推荐安装nodejs **[12.16.1](https://nodejs.org/download/release/v12.16.1/)** 版本）
1. 安装使用[淘宝镜像:cnpm](https://developer.aliyun.com/mirror/NPM?from=tnpm)。
1. 安装pm2: ```cnpm i pm2 -g```
1. 安装ts: ```cnpm i typescript -g```
1. clone项目，进入项目目录。
1. 执行 ```cnpm i```

# 使用
- ```npm run serve```: 启动一个热加载的Web服务器（开发模式）
- ```npm run build```: 利用webpack编译应用，压缩JS和CSS资源（发布用）
- ```npm run start```: 以生产模式启动一个Web服务器 (需要先执行nuxt build)
- ```nuxt generate```: 编译应用，并依据路由配置生成对应的HTML文件 (用于静态站点的部署)。

# 发布上线
1. 先编译应用： ```npm run build```
2. 启动pm2守护： ```pm2 start pm2.json```



# 项目主要框架/库
1. ### [nuxt](https://zh.nuxtjs.org/guide/installation/)(包含以下主要部分：)
    1. #### [vue](https://cn.vuejs.org/v2/guide/index.html)
    1. #### [vuex](https://vuex.vuejs.org/zh/guide/)

1. ### [koa:服务器模块](https://koa.bootcss.com/)

1. ### [pm2:服务器进程守护模块](https://pm2.keymetrics.io/)

1. ### [vuex-module-decorators:vuex修饰器写法](https://github.com/championswimmer/vuex-module-decorators)

1. ### [vuex-class:vuex引入的修饰器写法](https://github.com/ktsn/vuex-class)

1. ### [vue-property-decorator:vue修饰器写法](https://github.com/kaorun343/vue-property-decorator)

1. ### [element:饿了么UI](http://element-cn.eleme.io/#/zh-CN/component/installation)

1. ### [axios:发送请求](https://github.com/axios/axios)

1. ### [sass:css扩展语法](https://www.sass.hk/docs/)

1. ### [typescript:javascript扩展语法](https://ts.xcatliu.com/)

<br>
<br>

# 目录介绍
- **assets**: 存放开发过程中使用的静态资源
- **components**: vue组件目录
- **declare**: 全局声明目录
- **interface**: 存放接口目录
- **layouts**: 页面基础布局目录
- **libs**: 存放自定义库的目录
- **logs**: 存放日志的目录
- **middleware**: 存放中间件的目录
- **plugins**: 存放插件配置、引入的目录
- **server**: 存放服务器配置的目录
- **static**: 存放静态资源的目录
- **store**: 存放vuex的目录

# 发布文件介绍
- **.env.official**: 执行```npm run build```的时候会使用此文件里面配置的环境变量。
- **pm2.json**: 执行```pm2 start pm2.json```启动服务器的时候会使用里面的配置（比如端口号）。