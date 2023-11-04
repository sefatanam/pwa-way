import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./public/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="./public/javascript.svg" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vitex!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <a href="/pages/contact.html">Contact</a>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
