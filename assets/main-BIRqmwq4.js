import{a as h}from"./vendor-CR7N1gwd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();(()=>{const r=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".menu-link"),t=document.querySelector(".mobile-menu-overlay"),n=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),r.classList.toggle("is-open")};e.addEventListener("click",n),s.addEventListener("click",n),a.forEach(o=>{o.addEventListener("click",n)}),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(r.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const c=h.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class L{static async getExercises(e={}){const{page:s=1,limit:a=10}=e;return(await c.get("/exercises",{params:{page:s,limit:a,...e}})).data}static async addRateByExerciseId(e,s){return(await c.patch(`/exercises/${e}/rating`,s)).data}static async getExerciseById(e){return(await c.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:s=1,limit:a=12}=e;return(await c.get("/filters",{params:{page:s,limit:a,...e}})).data}static async getQuote(){return(await c.get("/quote")).data}static async addSubscription(e){return(await c.post("/subscription",e)).data}}const M=(r,e)=>{const s=r.map(a=>`<li class="item"><a href="#">${a}</a></li>`).join("");e.insertAdjacentHTML("beforeend",s)},T=(r,e)=>{const s=r.map(({filter:a,name:t,imgURL:n})=>`
      <li class="card-item">
        <a class="card-link" href="#">
          <img
            src="${n}"
            alt="${t}"
          />
          <div class="card-content" data-category="${t}">
            <div class="card-name">${t}</div>
            <div class="card-filter">${a}</div>
          </div>
        </a>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",s)},q=(r,e)=>{const s=r.map(({bodyPart:a,burnedCalories:t,gifUrl:n,name:o,rating:p,target:l,time:d,_id:u})=>`
      <li class="card-item">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            <div class="__rating">${p}</div>
          </div>
          <div>
            <a class="__start" href="#" data-id="${u}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${n}"
            alt="${l}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${o}">${o}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${t} / ${d} min">${t} / ${d} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${a}">${a}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${l}">${l}</span>
            </li>
          </ul>
        </div>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",s)},b=(r,e)=>{const{bodyPart:s,burnedCalories:a,description:t,equipment:n,gifUrl:o,name:p,popularity:l,rating:d,target:u,time:v,_id:y}=r,$=`
      <div class="modal-gif-container">
        <img class="modal-gif" src="${o}" alt="${u}">
      </div>
      <div class="modal-content">
        <h2>${p}</h2>
        <div class="modal-rating">
            <span>${d}</span>
            <span class="modal-stars">★★★★☆</span>
        </div>
        <div class="modal-details">
            <p><strong>Target:</strong> ${u}</p>
            <p><strong>Body Part:</strong> ${s}</p>
            <p><strong>Equipment:</strong> ${n}</p>
            <p><strong>Popular:</strong> ${l}</p>
            <p><strong>Burned Calories:</strong> ${a}/${v} min</p>
        </div>
        <p class="description">${t}</p>
        <ul class="modal-controls" data-id=${y}>
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
      `;e.innerHTML=$};let i={};const E=async r=>{try{const e=await L.getExerciseById(r);b(e,i.container),i.modal.classList.toggle("is-hidden")}catch(e){console.log(e)}},x=()=>{i={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]")},!(!i.opener||!i.closer||!i.modal||!i.container)&&(i.opener.addEventListener("click",r=>{const e=r.target;if(e.nodeName!=="A")return;const s=e.dataset.id;s&&E(s)}),i.closer.addEventListener("click",()=>{i.modal.classList.toggle("is-hidden"),i.container.innerHTML=""}))};window.addEventListener("load",()=>{x()});const m=document.querySelector(".scroll-up");let g=document.documentElement.scrollTop;m.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=f;window.onload=f;function f(){g=document.documentElement.scrollTop,g>100?m.style.display="flex":m.style.display="none"}export{L as A,T as a,q as b,M as r};
//# sourceMappingURL=main-BIRqmwq4.js.map
