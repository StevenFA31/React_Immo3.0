import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// const root = resolve(__dirname, 'scr')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
