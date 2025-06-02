# Vue 3 + Vite

1. 直接前端打包（不请求后端）时，运行index显示页面为空白\
解决：\
项目安装：@vitejs/plugin-legacy
npm install @vitejs/plugin-legacy\
具体配置详见：https://blog.csdn.net/baoyin0822/article/details/141609137

2. 部署到github\
详细见：https://juejin.cn/post/7287914031514419259
https://www.jianshu.com/p/1dabc3f7d6d0 (实际用)

3. 转TS
将.js文件改成.ts文件\
创建 tsconfig.json 文件 并配置\
创建 src/shims-vue.d.ts 文件 并配置\
安装插件：npm install -D @types/node\
安装插件：npm install -D @vue/tsconfig\
安装插件：npm install -D typescript\
安装插件：npm install -D vue-tsc\
更改："build": "vue-tsc -b && vite build"