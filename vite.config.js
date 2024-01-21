import { defineConfig } from "vite";
import path, { resolve } from "path";
import addTimestamp from 'vite-plugin-add-timestamp';

const isProductionENV = process.env.NODE_ENV === "production";

export default defineConfig({
  /** 部署到 GitHub Pages 的 base 設定：
   * base 對應 vue-cli 的 vue.config.js 檔 publicPath 的屬性設定，在 vite 設定 base。
   * 參考來源：[正確的設置 Vue Cli 與 Vite 編譯後的路徑](https://israynotarray.com/nodejs/20230214/796256725/)
   * 預設 "./"，配合 isProductionENV ? "/vite-sass-vanila-js/" : './' 在環境下決定網址路徑
   */
  base: "/vite-vanilla-js-template/", // 對應 GitHub 專案名稱路徑 (注意開頭一定要 '/' 不能是 './')
  resolve: {
    // 相關模組時對應路徑的別名，增加引用的便利性
    alias: {
      "@": path.resolve(__dirname, "./src"),
      assets: path.resolve(__dirname, "./src/assets/"),
      img: path.resolve(__dirname, "./src/assets/img/"),
      styles: path.resolve(__dirname, "./src/assets/styles/"),
      // pages: path.resolve(__dirname, "./pages/"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "pages/content.html"),
      },
      output: {
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js",
        assetFileNames: (info) => {
          let type = info.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(type)) {
            type = "img";
          } else if (/css/i.test(type)) {
            type = "css";
          }
          return `assets/${type}/[name].[ext]`;
        },
      },
    },
    minify: "terser", // 預設值：false，手動安裝透過 terser 模組引用設定，對註解部份再接處理
    terserOptions: {
      compress: {
        drop_console: isProductionENV, // true 去掉所有 console
        drop_debugger: isProductionENV, // true 去掉所有 debugger
      },
    },
    cssMinify: false, // 設定 true 不壓單行
    cssCodeSplit: false, // 多支 css 檔時整理成一支檔，預設值：false
    sourcemap: false, // 打包後的 .js 檔，多帶上 .map 
    outDir: resolve(__dirname, './docs'), // 打包檔案對應 GitHub Pages main 分支下的 docs (預設資料夾名稱) 站台根層
  },
  plugins: [
    addTimestamp(),
  ],
});
