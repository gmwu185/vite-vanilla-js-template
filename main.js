import "styles/style.scss";
import viteLogo from "/vite.svg";
import javascriptLogo from "img/javascript.svg"; // 這裡的 img/ 使用了 alias (別名) 設定縮寫路徑
import pikaPic from "img/皮卡丘原型現身.webp";
import { setupCounter } from "./src/assets/js/counter.js";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="row">
      <div class="col">
        <button class="btn btn-primary my-2" id="counter" type="button"></button>
      </div>
      <div class="col-md-auto my-2">
        <a class="w-25 text-center" href="https://vitejs.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a class="w-25 text-center" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
          <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-md-auto">
        <img src="${pikaPic}" width="300px" alt="皮卡丘原型現身" />
      </div>
      <div class="col-md">
        <p>pikaPic -> 別名：${pikaPic}</p>
      </div>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
