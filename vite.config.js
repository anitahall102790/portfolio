import { resolve } from 'path'

export default {
  base: '/portfolio/',

  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        work: resolve(__dirname, 'src/work.html'),
        contact: resolve(__dirname, 'src/contact.html'),
      
        azureModernization: resolve(
          __dirname,
          'src/case-studies/azure-modernization.html'
        ),
      
        documentValidation: resolve(
          __dirname,
          'src/case-studies/document-validation.html'
        ),
      
        aiAdoptionStrategy: resolve(
          __dirname,
          'src/case-studies/ai-adoption-strategy.html'
        )
      }
    }
  }
}