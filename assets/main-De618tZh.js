import{a as w,r as M,i as E}from"./vendor-CpjBsdJ0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".menu-link"),s=document.querySelector(".mobile-menu-overlay"),n=()=>{const r=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open")};e.addEventListener("click",n),a.addEventListener("click",n),o.forEach(r=>{r.addEventListener("click",n)}),s.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const c=w.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class h{static async getExercises(e={}){const{page:a=1,limit:o=10}=e;return(await c.get("/exercises",{params:{page:a,limit:o,...e}})).data}static async addRateByExerciseId(e,a){return(await c.patch(`/exercises/${e}/rating`,a)).data}static async getExerciseById(e){return(await c.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:a=1,limit:o=12}=e;return(await c.get("/filters",{params:{page:a,limit:o,...e}})).data}static async getQuote(){return(await c.get("/quote")).data}static async addSubscription(e){return(await c.post("/subscription",e)).data}}const D=(t,e)=>{const a=t.map(o=>`<li class="item"><a href="#">${o}</a></li>`).join("");e.insertAdjacentHTML("beforeend",a)},P=(t,e)=>{const a=t.map(({filter:o,name:s,imgURL:n})=>`
      <li class="card-item">
        <a class="card-link" href="#">
          <img
            src="${n}"
            alt="${s}"
          />
          <div class="card-content" data-category="${s}">
            <div class="card-name">${s}</div>
            <div class="card-filter">${o}</div>
          </div>
        </a>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",a)},F=(t,e,a=!1)=>{const o=t.map(({bodyPart:s,burnedCalories:n,gifUrl:r,name:u,rating:g,target:l,time:d,_id:m})=>{const f=a?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="./img/icons.svg#icon-trash"></use>
              </svg>
            </a>`:`<div class="__rating">${g}</div>`;return`
      <li class="card-item" data-id="${m}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${f}
          </div>
          <div>
            <a class="__start" href="#" data-id="${m}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${r}"
            alt="${l}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${u}">${u}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${n} / ${d} min">${n} / ${d} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${s}">${s}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${l}">${l}</span>
            </li>
          </ul>
        </div>
      </li>
      `}).join("");e.insertAdjacentHTML("beforeend",o)},T=(t,e)=>{const{bodyPart:a,burnedCalories:o,description:s,equipment:n,gifUrl:r,name:u,popularity:g,rating:l,target:d,time:m,_id:f}=t,S=`
      <div class="modal-gif-container">
        <img class="modal-gif" src="${r}" alt="${d}">
      </div>
      <div class="modal-content">
        <h2>${u}</h2>
        <div class="modal-rating">
            <span>${l}</span>
            <span class="modal-stars">★★★★☆</span>
        </div>
        <div class="modal-details">
            <p><strong>Target:</strong> ${d}</p>
            <p><strong>Body Part:</strong> ${a}</p>
            <p><strong>Equipment:</strong> ${n}</p>
            <p><strong>Popular:</strong> ${g}</p>
            <p><strong>Burned Calories:</strong> ${o}/${m} min</p>
        </div>
        <p class="description">${s}</p>
        <ul class="modal-controls" data-id=${f}>
          <li class="modal-controls-item">
            <button class="modal-favorite-button">
              Add to favorites
                <svg class="modal-favorite-icon" width="24" height="24">
                  <use href="./img/icons.svg#icon-heart"></use>
                </svg>
            </button>
          </li>
          <li class="modal-controls-item">
            <button class="modal-rating-button" data-raiting-modal-open>Give a rating</button>
          </li>
        </div>
      </div>
      `;e.innerHTML=S};let i={},p={},q;const B=async t=>{try{const e=await h.getExerciseById(t);T(e,i.container),i.modal.classList.toggle("is-hidden"),k(e._id)}catch(e){console.log(e)}},A=()=>{i={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]")},!(!i.opener||!i.closer||!i.modal||!i.container)&&(i.opener.addEventListener("click",t=>{const e=t.target;if(e.nodeName!=="A")return;const a=e.dataset.id;a&&B(a)}),i.closer.addEventListener("click",()=>{i.modal.classList.toggle("is-hidden"),i.container.innerHTML=""}))};function L(t){let e=document.querySelector(".raiting-value");e.innerText=`${t.toFixed(1)}`}let b=M({starSize:24,element:document.querySelector("#rater"),rateCallback:function(e,a){L(e),this.setRating(e),a()}});function R(){document.querySelector(".raiting-form input").value="",document.querySelector(".raiting-form textarea").value="",b.clear()}function j(t){try{h.addRateByExerciseId(q,{rate:b.getRating(),email:t.target[0].value,review:t.target[1].value})}catch(e){E.error({title:"Error",message:"Unable to send rate"}),console.log(e)}finally{L(0),R(),v()}}const O=document.querySelector(".raiting-form");O.addEventListener("submit",t=>{t.preventDefault();const e=!t.target[0].value,a=!t.target[1].value;if(e||a){E.error({title:"Error",message:"Email and comment fields should not be empty"});return}j(t)});function v(){p.modal.classList.toggle("is-hidden"),i.modal.classList.toggle("is-hidden")}const k=t=>{q=t,p={openModalBtn:document.querySelector("[data-raiting-modal-open]"),closeModalBtn:document.querySelector("[data-raiting-modal-close]"),modal:document.querySelector("[data-raiting-modal]")},p.openModalBtn.addEventListener("click",v),p.closeModalBtn.addEventListener("click",v)};window.addEventListener("load",()=>{A()});async function I(){try{const t=new Date().toLocaleDateString(),e=JSON.parse(localStorage.getItem("quoteData"));if(e&&e.date===t)return e.quote;let a=await h.getQuote();const o={date:t,quote:a};return localStorage.setItem("quoteData",JSON.stringify(o)),o.quote}catch{console.log("Error during  getting quote")}}I().then(t=>{document.getElementById("quote_text").innerText=t.quote,document.getElementById("quote_author").innerText=t.author});const y=document.querySelector(".scroll-up");let $=document.documentElement.scrollTop;y.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=x;window.onload=x;function x(){$=document.documentElement.scrollTop,$>100?y.style.display="flex":y.style.display="none"}export{h as A,P as a,F as b,D as r};
//# sourceMappingURL=main-De618tZh.js.map
