import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as D,i as x}from"./assets/vendor-651d7991.js";const M=document.querySelector("#datetime-picker"),o=document.querySelector("button"),m=document.querySelector("[data-days]"),l=document.querySelector("[data-hours]"),f=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");document.addEventListener("DOMContentLoaded",()=>{o.disabled=!0});let y="";const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(x.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),o.disabled=!0):(o.disabled=!1,y=t[0])}};D(M,q);function v(t){const r=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),a=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:s,minutes:a,seconds:c}}o.addEventListener("click",T);function e(t){return t.toString().padStart(2,"0")}function T(){const t=y.getTime(),d=setInterval(()=>{const u=new Date,n=t-u,{days:i,hours:r,minutes:s,seconds:a}=v(n);if(n<=0)clearInterval(d),m.textContent="00",l.textContent="00",f.textContent="00",h.textContent="00";else{const c=e(i),C=e(r),S=e(s),p=e(a);m.textContent=c,l.textContent=C,f.textContent=S,h.textContent=p}},1e3)}
//# sourceMappingURL=commonHelpers.js.map
