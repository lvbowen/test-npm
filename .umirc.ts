import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  locale: {
    default: 'zh-CN',
    antd: true,
    // title: false,
  },
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'yl-slsw-business-ui',
  //       libraryDirectory: 'es',
  //       style: true,
  //       // 禁止转成短横线-
  //       // camel2DashComponentName: false,
  //     },
  //   ],
  // ],
});
