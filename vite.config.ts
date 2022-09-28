import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

import type { PluginOption } from 'vite';

const plugins: PluginOption[] = [
  viteCommonjs(),
  react(),
  vitePluginImp({
    libList: [
      {
        libName: 'antd',
        style: (name) => `antd/es/${name}/style`,
      },
    ],
    exclude: ['antd-mobile'],
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

if (process.env.analyze) {
  plugins.push(
    // @ts-ignore ts类型校验会报错，但是运行正常
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
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
  resolve: {
    alias: {
      '@': '/src',
      '@c': '/src/components',
      '@u': '/src/utils',
    },
  },
  build: {
    target: 'es2015',
  },
  optimizeDeps: {
    include: ['react/jsx-runtime', 'axios'],
  },
  server: {
    port: 9200,
    proxy: {
      '/api2': {
        target: 'http://localhost:8500',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ''),
      },
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
