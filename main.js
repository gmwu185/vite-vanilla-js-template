import "styles/style.css";
import viteLogo from "/vite.svg";
import javascriptLogo from "img/javascript.svg"; // 這裡的 img/ 使用了 alias (別名) 設定縮寫路徑
import pikaPic from "img/皮卡丘原型現身.webp";
import { setupCounter } from "./src/assets/js/counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <img src="${pikaPic}" width="300px" alt="皮卡丘原型現身" />
    <p>pikaPic -> 別名：${pikaPic}</p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
