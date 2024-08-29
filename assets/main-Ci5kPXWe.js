import{a as w,i as p,g as d}from"./vendor-CDwpJrNp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const l=w.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class ${static async getExercises(e={}){const{page:a=1,limit:n=10}=e;return(await l.get("/exercises",{params:{page:a,limit:n,...e}})).data}static async addRateByExerciseId(e,a){return(await l.patch(`/exercises/${e}/rating`,a)).data}static async getExerciseById(e){return(await l.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:a=1,limit:n=12}=e;return(await l.get("/filters",{params:{page:a,limit:n,...e}})).data}static async getQuote(){return(await l.get("/quote")).data}static async addSubscription(e){return(await l.post("/subscription",e)).data}}async function _(){try{const t=new Date().toLocaleDateString(),e=JSON.parse(localStorage.getItem("quoteData"));if(e&&e.date===t)return e.quote;let a=await $.getQuote();const n={date:t,quote:a};return localStorage.setItem("quoteData",JSON.stringify(n)),n.quote}catch{console.log("Error during  getting quote")}}_().then(t=>{document.getElementById("quote_text").innerText=t.quote,document.getElementById("quote_author").innerText=t.author});(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".menu-link"),s=document.querySelector(".mobile-menu-overlay"),o=()=>{const r=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open")};e.addEventListener("click",o),a.addEventListener("click",o),n.forEach(r=>{r.addEventListener("click",o)}),s.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const N=(t,e)=>{const a=t.map(n=>`<li class="item"><a href="#">${n}</a></li>`).join("");e.insertAdjacentHTML("beforeend",a)},H=(t,e)=>{const a=t.map(({filter:n,name:s,imgURL:o})=>`
      <li class="card-item">
        <a class="card-link" href="#">
          <img
            src="${o}"
            alt="${s}"
          />
          <div class="card-content" data-category="${s}">
            <div class="card-name">${s}</div>
            <div class="card-filter">${n}</div>
          </div>
        </a>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",a)},Q=(t,e,a=!1)=>{const n=t.map(({bodyPart:s,burnedCalories:o,gifUrl:r,name:f,rating:y,target:u,time:m,_id:v})=>{const h=a?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="./img/icons.svg#icon-trash"></use>
              </svg>
            </a>`:`<div class="__rating">${y}</div>`;return`
      <li class="card-item" data-id="${v}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${h}
          </div>
          <div>
            <a class="__start" href="#" data-id="${v}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${r}"
            alt="${u}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${f}">${f}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${o} / ${m} min">${o} / ${m} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${s}">${s}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${u}">${u}</span>
            </li>
          </ul>
        </div>
      </li>
      `}).join("");e.insertAdjacentHTML("beforeend",n)},T=(t,e)=>{const{bodyPart:a,burnedCalories:n,description:s,equipment:o,gifUrl:r,name:f,popularity:y,rating:u,target:m,time:v,_id:h}=t,q=`
      <div class="modal-gif-container">
        <img class="modal-gif" src="${r}" alt="${m}">
      </div>
      <div class="modal-content">
        <h2>${f}</h2>
        <div class="modal-rating">
            <span>${u}</span>
            <span class="modal-stars">★★★★☆</span>
        </div>
        <div class="modal-details">
            <p><strong>Target:</strong> ${m}</p>
            <p><strong>Body Part:</strong> ${a}</p>
            <p><strong>Equipment:</strong> ${o}</p>
            <p><strong>Popular:</strong> ${y}</p>
            <p><strong>Burned Calories:</strong> ${n}/${v} min</p>
        </div>
        <p class="description">${s}</p>
        <ul class="modal-controls" data-id=${h}>
          <li class="modal-controls-item">
            <button class="modal-favorite-button">
              Add to favorites
                <svg class="modal-favorite-icon" width="24" height="24">
                  <use href="./img/icons.svg#icon-heart"></use>
                </svg>
            </button>
          </li>
          <li class="modal-controls-item">
            <button class="modal-rating-button">Give a rating</button>
          </li>
        </div>
      </div>
      `;e.innerHTML=q};let i={};const M=async t=>{try{const e=await $.getExerciseById(t);T(e,i.container),i.modal.classList.toggle("is-hidden")}catch(e){console.log(e)}},A=()=>{i={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]")},!(!i.opener||!i.closer||!i.modal||!i.container)&&(i.opener.addEventListener("click",t=>{const e=t.target;if(e.nodeName!=="A")return;const a=e.dataset.id;a&&M(a)}),i.closer.addEventListener("click",()=>{i.modal.classList.toggle("is-hidden"),i.container.innerHTML=""}))};window.addEventListener("load",()=>{A()});const I=document.querySelector(".js-footer-form"),g=document.querySelector('input[type="email"]'),c=document.querySelector(".footer_form_btn");c.addEventListener("click",j);function E(t){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t)}c.disabled=!0;g.addEventListener("input",()=>{const t=g.value;E(t)?(c.classList.add("active"),c.disabled=!1):(c.classList.remove("active"),c.disabled=!0)});g.addEventListener("blur",()=>{const t=g.value;E(t)?c.classList.add("active"):p.error({title:"Error",message:"Invalid email address was entered."})});function j(t){t.preventDefault();const e=g.value;if(!E(e)){console.log("tyta"),p.error({title:"Error",message:"Invalid email address was entered."});return}const a={email:e};$.addSubscription(a).then(n=>{const s=n.data.message;p.success({title:"Success",message:s})}).catch(n=>{const s=n.response.data.message;n.response.status===409?p.warning({title:"Warning",message:"Subscription already exists"}):n.response.status===400&&p.warning({title:"Warning",message:s})}),I.reset()}const O=document.querySelectorAll(".footer_soc_item");O.forEach(t=>{const e=t.querySelector(".footer_soc_icon");t.addEventListener("mouseenter",()=>{d.to(t,{keyframes:{"0%":{rotation:-5},"25%":{rotation:5},"50%":{rotation:-5},"75%":{rotation:5},"100%":{rotation:0}},duration:.5,repeat:1}),d.to(e,{keyframes:{"0%":{x:-3},"25%":{x:3},"50%":{x:-3},"75%":{x:3},"100%":{x:0}},duration:.2,repeat:3})}),t.addEventListener("mouseleave",()=>{d.to(t,{rotation:0,duration:.2}),d.to(e,{x:0,duration:.2})})});const B={root:null,rootMargin:"0px",threshold:0},S=document.querySelector(".footer_logo_icon"),k=document.querySelector(".footer_title_span"),z=new IntersectionObserver(P,B);z.observe(S);function P(t,e){t.forEach(a=>{a.isIntersecting&&(d.to(S,{duration:2,opacity:1,x:0,rotationX:360}),d.to(k,{duration:2,opacity:1}))})}const b=document.querySelector(".scroll-up");let x=document.documentElement.scrollTop;b.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=L;window.onload=L;function L(){x=document.documentElement.scrollTop,x>100?b.style.display="flex":b.style.display="none"}export{$ as A,H as a,Q as b,N as r};
//# sourceMappingURL=main-Ci5kPXWe.js.map
