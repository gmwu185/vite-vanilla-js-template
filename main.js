import "styles/style.scss";
import viteLogo from "/vite.svg";
import javascriptLogo from "img/javascript.svg"; // 這裡的 img/ 使用了 alias (別名) 設定縮寫路徑
import pikaPic from "img/皮卡丘原型現身.webp";
import { setupCounter } from "./src/assets/js/counter.js";

document.querySelector("#app").innerHTML = `
  <div class="bg-gray-800">
    <div class="grid md:grid-cols-3">
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vitejs.dev" target="_blank">
        <img src="https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default" class="logo" alt="Vite logo" />
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
    <h1 class="text-xl">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs mb-3">
      Click on the Vite logo to learn more
    </p>
    <div class="flex flex-col items-center px-3">
      <img class="w-[30rem] mb-2" src="${pikaPic}" alt="皮卡丘原型現身" />
      <p class="w-full mb-3">pikaPic -> 別名：${pikaPic}</p>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
