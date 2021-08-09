import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import legacy from '@vitejs/plugin-legacy';
import reactJsx from 'vite-react-jsx';

const plugins = [
  reactRefresh(),
  reactJsx(), // React 17's automatic JSX runtime for your entire bundle
  vitePluginImp({
    libList: [
      {
        libName: 'antd',
        style: (name) => `antd/lib/${name}/style/index.less`,
      },
      {
        libName: 'antd-mobile',
        style: (name) => `antd-mobile/lib/${name}/style/index.less`,
      },
    ],
  }),
];

if (process.env.legacy) {
  // 为打包后的文件提供传统浏览器兼容性支持
  plugins.push(
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  build: {
    target: 'es2015',
  },
});
