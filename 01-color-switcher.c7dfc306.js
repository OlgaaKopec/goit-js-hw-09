!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");var d=null;e.addEventListener("click",(function(){e.disabled=!0,d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.addEventListener("click",(function(){e.disabled=!1,clearInterval(d)}));var n=document.createElement("div");n.classList.add("website"),n.appendChild(e),n.appendChild(t),document.body.insertBefore(n,document.body.secondChild)}();
//# sourceMappingURL=01-color-switcher.c7dfc306.js.map
