function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("7Y9D8");const l=document.querySelector('[name="delay"]'),i=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function a(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector('[type="submit"]').addEventListener("click",(t=>{t.preventDefault();for(let t=0;t<d.value;t++){a(t+1,l.valueAsNumber+i.valueAsNumber*t).then((t=>{e(u).Notify.success(t)})).catch((t=>{e(u).Notify.failure(t)}))}}));
//# sourceMappingURL=03-promises.783cd267.js.map