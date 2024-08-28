import{a as f}from"./vendor-CR7N1gwd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();(()=>{const r=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".menu-link"),t=document.querySelector(".mobile-menu-overlay"),a=()=>{const i=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!i),r.classList.toggle("is-open")};e.addEventListener("click",a),s.addEventListener("click",a),n.forEach(i=>{i.addEventListener("click",a)}),t.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&(r.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const c=f.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class y{static async getExercises(e={}){const{page:s=1,limit:n=10}=e;return(await c.get("/exercises",{params:{page:s,limit:n,...e}})).data}static async addRateByExerciseId(e,s){return(await c.patch(`/exercises/${e}/rating`,s)).data}static async getExerciseById(e){return(await c.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:s=1,limit:n=12}=e;return(await c.get("/filters",{params:{page:s,limit:n,...e}})).data}static async getQuote(){return(await c.get("/quote")).data}static async addSubscription(e){return(await c.post("/subscription",e)).data}}const x=(r,e)=>{const s=r.map(n=>`<li class="item"><a href="#">${n}</a></li>`).join("");e.insertAdjacentHTML("beforeend",s)},E=(r,e)=>{const s=r.map(({filter:n,name:t,imgURL:a})=>`
      <li class="card-item">
        <a class="card-link" href="#">
          <img
            src="${a}"
            alt="${t}"
          />
          <div class="card-content" data-category="${t}">
            <div class="card-name">${t}</div>
            <div class="card-filter">${n}</div>
          </div>
        </a>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",s)},w=(r,e)=>{const s=r.map(({bodyPart:n,burnedCalories:t,gifUrl:a,name:i,rating:u,target:d,time:l,_id:p})=>`
      <li class="card-item">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            <div class="__rating">${u}</div>
          </div>
          <div>
            <a class="__start" href="#" data-id="${p}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${a}"
            alt="${d}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${i}">${i}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${t} / ${l} min">${t} / ${l} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${n}">${n}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${d}">${d}</span>
            </li>
          </ul>
        </div>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",s)},$=(r,e)=>{const{bodyPart:s,burnedCalories:n,description:t,equipment:a,gifUrl:i,name:u,popularity:d,rating:l,target:p,time:m,_id:g}=r,v=`
      <div class="modal-gif-container">
        <img class="modal-gif" src="${i}" alt="${p}">
      </div>
      <div class="modal-content">
        <h2>${u}</h2>
        <div class="modal-rating">
            <span>${l}</span>
            <span class="modal-stars">★★★★☆</span>
        </div>
        <div class="modal-details">
            <p><strong>Target:</strong> ${p}</p>
            <p><strong>Body Part:</strong> ${s}</p>
            <p><strong>Equipment:</strong> ${a}</p>
            <p><strong>Popular:</strong> ${d}</p>
            <p><strong>Burned Calories:</strong> ${n}/${m} min</p>
        </div>
        <p class="description">${t}</p>
        <ul class="modal-controls" data-id=${g}>
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
      `;e.innerHTML=v};let o={};const h=async r=>{try{const e=await y.getExerciseById(r);$(e,o.container),o.modal.classList.toggle("is-hidden")}catch(e){console.log(e)}},b=()=>{o={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]")},!(!o.opener||!o.closer||!o.modal||!o.container)&&(o.opener.addEventListener("click",r=>{const e=r.target;if(e.nodeName!=="A")return;const s=e.dataset.id;s&&h(s)}),o.closer.addEventListener("click",()=>{o.modal.classList.toggle("is-hidden"),o.container.innerHTML=""}))};window.addEventListener("load",()=>{b()});export{y as A,E as a,w as b,x as r};
//# sourceMappingURL=main-QnSP-T_G.js.map
