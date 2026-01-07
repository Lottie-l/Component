import { defineConfig } from 'dumi';
import * as path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  title: '我的组件库',
  // apiParser: {},
  themeConfig: {
    name: '我的组件库',
    logo: '/logo.png',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
    // entryFile: './src/index.tsx', //这里是API表格解析入口
  },
  favicons: ['/logo.png'],
  // base: '/my-component-lib',
  // publicPath: '/',
  // exportStatic: {},
  alias: {
    'my-component-lib': path.resolve(__dirname, 'src'),
  },
});
