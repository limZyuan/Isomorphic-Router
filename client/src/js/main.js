import { isomorphicRouter } from "./universalRouter.js"; // isomorphic router

// js logic from other pages
import { loginFunction } from "./login.js";
import { registerFunction } from "./register.js";

// Load css
import "../css/global.css";
import "../css/mainBody.css";
import "../css/sidebar.css";

// mainpage function
const mainPageFunction = () => {
  console.log('do something at mainpage')
};

// frontend SPA routing function
async function render() {
  const page = await isomorphicRouter.resolve(location.pathname);
  if (page.redirect) {
    window.location = page.redirect;
  } else {
    document.body.innerHTML = page.content;
    if (window.location.pathname === "/") {
      mainPageFunction();
    } else if (window.location.pathname === "/login") {
      loginFunction();
    } else if (window.location.pathname === "/register") {
      registerFunction();
    }
  }
}

render(); // run client-side application
