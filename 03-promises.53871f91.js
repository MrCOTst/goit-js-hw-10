!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var i=o("h6c0i");const u={button:document.querySelector("button"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')};function l(e,t){const n=Math.random()>.3,o={position:e,delay:t};return new Promise(((e,i)=>{setTimeout((()=>{n?e(o):(i(o),console.log(t))}),t)}))}u.button.addEventListener("click",(function(e){e.preventDefault();let t=Number(u.inputAmount.value),n=Number(u.inputDelay.value),o=Number(u.inputStep.value),r=null;for(r=1;r<=t;r+=1)console.log("step:",o),console.log("delay:",n),console.log("position:",r),l(r,n).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),n+=o})),u.button.style.marginTop="10px",u.button.style.marginLeft="10px",u.button.style.maxHeight="50px"}();
//# sourceMappingURL=03-promises.53871f91.js.map