const t="input-file-from-webcam";let n;let e;let s=false;let o=false;const c=(t,n="")=>{{return()=>{}}};const l=(t,n)=>{{return()=>{}}};const i="{visibility:hidden}.hydrated{visibility:inherit}";const f={};const r=t=>t!=null;const u=t=>{t=typeof t;return t==="object"||t==="function"};function a(t){var n,e,s;return(s=(e=(n=t.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||e===void 0?void 0:e.getAttribute("content"))!==null&&s!==void 0?s:undefined}const d=(t,n,...e)=>{let s=null;let o=false;let c=false;const l=[];const i=n=>{for(let e=0;e<n.length;e++){s=n[e];if(Array.isArray(s)){i(s)}else if(s!=null&&typeof s!=="boolean"){if(o=typeof t!=="function"&&!u(s)){s=String(s)}if(o&&c){l[l.length-1].t+=s}else{l.push(o?h(null,s):s)}c=o}}};i(e);const f=h(t,null);f.o=n;if(l.length>0){f.l=l}return f};const h=(t,n)=>{const e={i:0,u:t,t:n,h:null,l:null};{e.o=null}return e};const p={};const m=t=>t&&t.u===p;const y=(t,n)=>{if(t!=null&&!u(t)){if(n&2){return parseFloat(t)}if(n&1){return String(t)}return t}return t};const $=t=>st(t).p;const b=(t,n,e)=>{const s=$(t);return{emit:t=>w(s,n,{bubbles:!!(e&4),composed:!!(e&2),cancelable:!!(e&1),detail:t})}};const w=(t,n,e)=>{const s=ht.ce(n,e);t.dispatchEvent(s);return s};const S=new WeakMap;const g=(t,n,e)=>{let s=ut.get(t);if(mt&&e){s=s||new CSSStyleSheet;if(typeof s==="string"){s=n}else{s.replaceSync(n)}}else{s=n}ut.set(t,s)};const v=(t,n,e,s)=>{var o;let c=k(n);const l=ut.get(c);t=t.nodeType===11?t:dt;if(l){if(typeof l==="string"){t=t.head||t;let n=S.get(t);let e;if(!n){S.set(t,n=new Set)}if(!n.has(c)){{{e=dt.createElement("style");e.innerHTML=l}const n=(o=ht.m)!==null&&o!==void 0?o:a(dt);if(n!=null){e.setAttribute("nonce",n)}t.insertBefore(e,t.querySelector("link"))}if(n){n.add(c)}}}else if(!t.adoptedStyleSheets.includes(l)){t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]}}return c};const j=t=>{const n=t.$;const e=t.p;const s=n.i;const o=c("attachStyles",n.S);const l=v(e.shadowRoot?e.shadowRoot:e.getRootNode(),n);if(s&10){e["s-sc"]=l;e.classList.add(l+"-h")}o()};const k=(t,n)=>"sc-"+t.S;const C=(t,n,e,s,o,c)=>{if(e!==s){let l=lt(t,n);n.toLowerCase();if(n==="ref"){if(s){s(t)}}else{const i=u(s);if((l||i&&s!==null)&&!o){try{if(!t.tagName.includes("-")){const o=s==null?"":s;if(n==="list"){l=false}else if(e==null||t[n]!=o){t[n]=o}}else{t[n]=s}}catch(t){}}if(s==null||s===false){if(s!==false||t.getAttribute(n)===""){{t.removeAttribute(n)}}}else if((!l||c&4||o)&&!i){s=s===true?"":s;{t.setAttribute(n,s)}}}}};const M=(t,n,e,s)=>{const o=n.h.nodeType===11&&n.h.host?n.h.host:n.h;const c=t&&t.o||f;const l=n.o||f;{for(s in c){if(!(s in l)){C(o,s,c[s],undefined,e,n.i)}}}for(s in l){C(o,s,c[s],l[s],e,n.i)}};const O=(t,e,o,c)=>{const l=e.l[o];let i=0;let f;let u;{f=l.h=dt.createElement(l.u);{M(null,l,s)}if(r(n)&&f["s-si"]!==n){f.classList.add(f["s-si"]=n)}if(l.l){for(i=0;i<l.l.length;++i){u=O(t,l,i);if(u){f.appendChild(u)}}}}return f};const P=(t,n,s,o,c,l)=>{let i=t;let f;if(i.shadowRoot&&i.tagName===e){i=i.shadowRoot}for(;c<=l;++c){if(o[c]){f=O(null,s,c);if(f){o[c].h=f;i.insertBefore(f,n)}}}};const U=(t,n,e,s,o)=>{for(;n<=e;++n){if(s=t[n]){o=s.h;R(s);o.remove()}}};const x=(t,n,e,s)=>{let o=0;let c=0;let l=n.length-1;let i=n[0];let f=n[l];let r=s.length-1;let u=s[0];let a=s[r];let d;while(o<=l&&c<=r){if(i==null){i=n[++o]}else if(f==null){f=n[--l]}else if(u==null){u=s[++c]}else if(a==null){a=s[--r]}else if(E(i,u)){N(i,u);i=n[++o];u=s[++c]}else if(E(f,a)){N(f,a);f=n[--l];a=s[--r]}else if(E(i,a)){N(i,a);t.insertBefore(i.h,f.h.nextSibling);i=n[++o];a=s[--r]}else if(E(f,u)){N(f,u);t.insertBefore(f.h,i.h);f=n[--l];u=s[++c]}else{{d=O(n&&n[c],e,c);u=s[++c]}if(d){{i.h.parentNode.insertBefore(d,i.h)}}}}if(o>l){P(t,s[r+1]==null?null:s[r+1].h,e,s,c,r)}else if(c>r){U(n,o,l)}};const E=(t,n)=>{if(t.u===n.u){return true}return false};const N=(t,n)=>{const e=n.h=t.h;const o=t.l;const c=n.l;const l=n.u;{{if(l==="slot");else{M(t,n,s)}}if(o!==null&&c!==null){x(e,o,n,c)}else if(c!==null){P(e,null,n,c,0,c.length-1)}else if(o!==null){U(o,0,o.length-1)}}};const R=t=>{{t.o&&t.o.ref&&t.o.ref(null);t.l&&t.l.map(R)}};const T=(t,s)=>{const o=t.p;const c=t.g||h(null,null);const l=m(s)?s:d(null,null,s);e=o.tagName;l.u=null;l.i|=4;t.g=l;l.h=c.h=o.shadowRoot||o;{n=o["s-sc"]}N(c,l)};const A=(t,n)=>{if(n&&!t.v&&n["s-p"]){n["s-p"].push(new Promise((n=>t.v=n)))}};const F=(t,n)=>{{t.i|=16}if(t.i&4){t.i|=512;return}A(t,t.j);const e=()=>H(t,n);return vt(e)};const H=(t,n)=>{const e=c("scheduleUpdate",t.$.S);const s=t.k;let o;if(n){{t.i|=256;if(t.C){t.C.map((([t,n])=>I(s,t,n)));t.C=null}}}e();return V(o,(()=>L(t,s,n)))};const L=async(t,n,e)=>{const s=t.p;const o=c("update",t.$.S);const l=s["s-rc"];if(e){j(t)}const i=c("render",t.$.S);{W(t,n)}if(l){l.map((t=>t()));s["s-rc"]=undefined}i();o();{const n=s["s-p"];const e=()=>q(t);if(n.length===0){e()}else{Promise.all(n).then(e);t.i|=4;n.length=0}}};const W=(t,n,e)=>{try{n=n.render();{t.i&=~16}{t.i|=2}{{{T(t,n)}}}}catch(n){it(n,t.p)}return null};const q=t=>{const n=t.$.S;const e=t.p;const s=c("postUpdate",n);const o=t.k;const l=t.j;{I(o,"componentDidRender")}if(!(t.i&64)){t.i|=64;{_(e)}s();{t.M(e);if(!l){D()}}}else{s()}{t.O(e)}{if(t.v){t.v();t.v=undefined}if(t.i&512){gt((()=>F(t,false)))}t.i&=~(4|512)}};const D=n=>{{_(dt.documentElement)}gt((()=>w(at,"appload",{detail:{namespace:t}})))};const I=(t,n,e)=>{if(t&&t[n]){try{return t[n](e)}catch(t){it(t)}}return undefined};const V=(t,n)=>t&&t.then?t.then(n):n();const _=t=>t.classList.add("hydrated");const z=(t,n)=>st(t).P.get(n);const B=(t,n,e,s)=>{const o=st(t);const c=o.P.get(n);const l=o.i;const i=o.k;e=y(e,s.U[n][0]);const f=Number.isNaN(c)&&Number.isNaN(e);const r=e!==c&&!f;if((!(l&8)||c===undefined)&&r){o.P.set(n,e);if(i){if((l&(2|16))===2){F(o,false)}}}};const G=(t,n,e)=>{if(n.U){const s=Object.entries(n.U);const o=t.prototype;s.map((([t,[s]])=>{if(s&31||e&2&&s&32){Object.defineProperty(o,t,{get(){return z(this,t)},set(e){B(this,t,e,n)},configurable:true,enumerable:true})}else if(e&1&&s&64){Object.defineProperty(o,t,{value(...n){const e=st(this);return e.N.then((()=>e.k[t](...n)))}})}}));if(e&1){const n=new Map;o.attributeChangedCallback=function(t,e,s){ht.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e)){s=this[e];delete this[e]}else if(o.hasOwnProperty(e)&&typeof this[e]==="number"&&this[e]==s){return}this[e]=s===null&&typeof this[e]==="boolean"?false:s}))};t.observedAttributes=s.filter((([t,n])=>n[0]&15)).map((([t,e])=>{const s=e[1]||t;n.set(s,t);return s}))}}return t};const J=async(t,n,e,s,o)=>{if((n.i&32)===0){{n.i|=32;o=rt(e);if(o.then){const t=l();o=await o;t()}if(!o.isProxied){G(o,e,2);o.isProxied=true}const t=c("createInstance",e.S);{n.i|=8}try{new o(n)}catch(t){it(t)}{n.i&=~8}t()}if(o.style){let t=o.style;const n=k(e);if(!ut.has(n)){const s=c("registerStyles",e.S);g(n,t,!!(e.i&1));s()}}}const i=n.j;const f=()=>F(n,true);if(i&&i["s-rc"]){i["s-rc"].push(f)}else{f()}};const K=t=>{if((ht.i&1)===0){const n=st(t);const e=n.$;const s=c("connectedCallback",e.S);if(!(n.i&1)){n.i|=1;{let e=t;while(e=e.parentNode||e.host){if(e["s-p"]){A(n,n.j=e);break}}}if(e.U){Object.entries(e.U).map((([n,[e]])=>{if(e&31&&t.hasOwnProperty(n)){const e=t[n];delete t[n];t[n]=e}}))}{J(t,n,e)}}else{Y(t,n,e.R)}s()}};const Q=t=>{if((ht.i&1)===0){const n=st(t);const e=n.k;{if(n.T){n.T.map((t=>t()));n.T=undefined}}{I(e,"disconnectedCallback")}}};const X=(t,n={})=>{var e;const s=c();const o=[];const l=n.exclude||[];const f=at.customElements;const r=dt.head;const u=r.querySelector("meta[charset]");const d=dt.createElement("style");const h=[];let p;let m=true;Object.assign(ht,n);ht.A=new URL(n.resourcesUrl||"./",dt.baseURI).href;t.map((t=>{t[1].map((n=>{const e={i:n[0],S:n[1],U:n[2],R:n[3]};{e.U=n[2]}{e.R=n[3]}const s=e.S;const c=class extends HTMLElement{constructor(t){super(t);t=this;ct(t,e);if(e.i&1){{{t.attachShadow({mode:"open"})}}}}connectedCallback(){if(p){clearTimeout(p);p=null}if(m){h.push(this)}else{ht.jmp((()=>K(this)))}}disconnectedCallback(){ht.jmp((()=>Q(this)))}componentOnReady(){return st(this).F}};e.H=t[0];if(!l.includes(s)&&!f.get(s)){o.push(s);f.define(s,G(c,e,1))}}))}));{d.innerHTML=o+i;d.setAttribute("data-styles","");const t=(e=ht.m)!==null&&e!==void 0?e:a(dt);if(t!=null){d.setAttribute("nonce",t)}r.insertBefore(d,u?u.nextSibling:r.firstChild)}m=false;if(h.length){h.map((t=>t.connectedCallback()))}else{{ht.jmp((()=>p=setTimeout(D,30)))}}s()};const Y=(t,n,e,s)=>{if(e){e.map((([e,s,o])=>{const c=t;const l=Z(n,o);const i=tt(e);ht.ael(c,s,l,i);(n.T=n.T||[]).push((()=>ht.rel(c,s,l,i)))}))}};const Z=(t,n)=>e=>{try{{if(t.i&256){t.k[n](e)}else{(t.C=t.C||[]).push([n,e])}}}catch(t){it(t)}};const tt=t=>(t&2)!==0;const nt=t=>ht.m=t;const et=new WeakMap;const st=t=>et.get(t);const ot=(t,n)=>et.set(n.k=t,n);const ct=(t,n)=>{const e={i:0,p:t,$:n,P:new Map};{e.N=new Promise((t=>e.O=t))}{e.F=new Promise((t=>e.M=t));t["s-p"]=[];t["s-rc"]=[]}Y(t,e,n.R);return et.set(t,e)};const lt=(t,n)=>n in t;const it=(t,n)=>(0,console.error)(t,n);const ft=new Map;const rt=(t,n,e)=>{const s=t.S.replace(/-/g,"_");const o=t.H;const c=ft.get(o);if(c){return c[s]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${o}.entry.js${""}`).then((t=>{{ft.set(o,t)}return t[s]}),it)};const ut=new Map;const at=typeof window!=="undefined"?window:{};const dt=at.document||{head:{}};const ht={i:0,A:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,s)=>t.addEventListener(n,e,s),rel:(t,n,e,s)=>t.removeEventListener(n,e,s),ce:(t,n)=>new CustomEvent(t,n)};const pt=t=>Promise.resolve(t);const mt=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(t){}return false})();const yt=[];const $t=[];const bt=(t,n)=>e=>{t.push(e);if(!o){o=true;if(n&&ht.i&4){gt(St)}else{ht.raf(St)}}};const wt=t=>{for(let n=0;n<t.length;n++){try{t[n](performance.now())}catch(t){it(t)}}t.length=0};const St=()=>{wt(yt);{wt($t);if(o=yt.length>0){ht.raf(St)}}};const gt=t=>pt().then(t);const vt=bt($t,true);export{p as H,X as b,b as c,d as h,pt as p,ot as r,nt as s};
//# sourceMappingURL=p-d57d6a67.js.map