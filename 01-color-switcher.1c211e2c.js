const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.body.style;let r=null;t.addEventListener("click",(()=>{t.setAttribute("disabled",""),r=setInterval((()=>{o.backgroundColor=a()}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled",""),clearInterval(r)}));const a=()=>`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;
//# sourceMappingURL=01-color-switcher.1c211e2c.js.map
