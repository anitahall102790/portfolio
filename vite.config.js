import { resolve } from 'path'

export default {
  base: '/portfolio/',

  root: resolve(__dirname, 'src'),

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        work: resolve(__dirname, 'src/work.html'),
        contact: resolve(__dirname, 'src/contact.html')
      }
    }
  }
}