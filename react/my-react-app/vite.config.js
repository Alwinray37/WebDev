import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*',
          dest: 'assets'
        }
      ]
    })
  ],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.gif']
});
