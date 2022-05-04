import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

loadEnv('', process.cwd(), '');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
