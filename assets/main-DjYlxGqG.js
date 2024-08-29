import{a as q,i as m,g as d}from"./vendor-CDwpJrNp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".menu-link"),s=document.querySelector(".mobile-menu-overlay"),o=()=>{const r=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open")};e.addEventListener("click",o),a.addEventListener("click",o),n.forEach(r=>{r.addEventListener("click",o)}),s.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const l=q.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class ${static async getExercises(e={}){const{page:a=1,limit:n=10}=e;return(await l.get("/exercises",{params:{page:a,limit:n,...e}})).data}static async addRateByExerciseId(e,a){return(await l.patch(`/exercises/${e}/rating`,a)).data}static async getExerciseById(e){return(await l.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:a=1,limit:n=12}=e;return(await l.get("/filters",{params:{page:a,limit:n,...e}})).data}static async getQuote(){return(await l.get("/quote")).data}static async addSubscription(e){return(await l.post("/subscription",e)).data}}const H=(t,e)=>{const a=t.map(n=>`<li class="item"><a href="#">${n}</a></li>`).join("");e.insertAdjacentHTML("beforeend",a)},F=(t,e)=>{const a=t.map(({filter:n,name:s,imgURL:o})=>`
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
      `).join("");e.insertAdjacentHTML("beforeend",a)},N=(t,e)=>{const a=t.map(({bodyPart:n,burnedCalories:s,gifUrl:o,name:r,rating:v,target:u,time:g,_id:f})=>`
      <li class="card-item">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            <div class="__rating">${v}</div>
          </div>
          <div>
            <a class="__start" href="#" data-id="${f}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${o}"
            alt="${u}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${r}">${r}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${s} / ${g} min">${s} / ${g} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${n}">${n}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${u}">${u}</span>
            </li>
          </ul>
        </div>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",a)},_=(t,e)=>{const{bodyPart:a,burnedCalories:n,description:s,equipment:o,gifUrl:r,name:v,popularity:u,rating:g,target:f,time:x,_id:S}=t,w=`
      <div class="modal-gif-container">
        <img class="modal-gif" src="${r}" alt="${f}">
      </div>
      <div class="modal-content">
        <h2>${v}</h2>
        <div class="modal-rating">
            <span>${g}</span>
            <span class="modal-stars">★★★★☆</span>
        </div>
        <div class="modal-details">
            <p><strong>Target:</strong> ${f}</p>
            <p><strong>Body Part:</strong> ${a}</p>
            <p><strong>Equipment:</strong> ${o}</p>
            <p><strong>Popular:</strong> ${u}</p>
            <p><strong>Burned Calories:</strong> ${n}/${x} min</p>
        </div>
        <p class="description">${s}</p>
        <ul class="modal-controls" data-id=${S}>
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
      `;e.innerHTML=w};let i={};const M=async t=>{try{const e=await $.getExerciseById(t);_(e,i.container),i.modal.classList.toggle("is-hidden")}catch(e){console.log(e)}},T=()=>{i={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]")},!(!i.opener||!i.closer||!i.modal||!i.container)&&(i.opener.addEventListener("click",t=>{const e=t.target;if(e.nodeName!=="A")return;const a=e.dataset.id;a&&M(a)}),i.closer.addEventListener("click",()=>{i.modal.classList.toggle("is-hidden"),i.container.innerHTML=""}))};window.addEventListener("load",()=>{T()});const j=document.querySelector(".js-footer-form"),p=document.querySelector('input[type="email"]'),c=document.querySelector(".footer_form_btn");c.addEventListener("click",A);function b(t){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t)}c.disabled=!0;p.addEventListener("input",()=>{const t=p.value;b(t)?(c.classList.add("active"),c.disabled=!1):(c.classList.remove("active"),c.disabled=!0)});p.addEventListener("blur",()=>{const t=p.value;b(t)?c.classList.add("active"):m.error({title:"Error",message:"Invalid email address was entered."})});function A(t){t.preventDefault();const e=p.value;if(!b(e)){console.log("tyta"),m.error({title:"Error",message:"Invalid email address was entered."});return}const a={email:e};$.addSubscription(a).then(n=>{const s=n.data.message;m.success({title:"Success",message:s})}).catch(n=>{const s=n.response.data.message;n.response.status===409?m.warning({title:"Warning",message:"Subscription already exists"}):n.response.status===400&&m.warning({title:"Warning",message:s})}),j.reset()}const B=document.querySelectorAll(".footer_soc_item");B.forEach(t=>{const e=t.querySelector(".footer_soc_icon");t.addEventListener("mouseenter",()=>{d.to(t,{keyframes:{"0%":{rotation:-5},"25%":{rotation:5},"50%":{rotation:-5},"75%":{rotation:5},"100%":{rotation:0}},duration:.5,repeat:1}),d.to(e,{keyframes:{"0%":{x:-3},"25%":{x:3},"50%":{x:-3},"75%":{x:3},"100%":{x:0}},duration:.2,repeat:3})}),t.addEventListener("mouseleave",()=>{d.to(t,{rotation:0,duration:.2}),d.to(e,{x:0,duration:.2})})});const I={root:null,rootMargin:"0px",threshold:0},E=document.querySelector(".footer_logo_icon"),O=document.querySelector(".footer_title_span"),z=new IntersectionObserver(P,I);z.observe(E);function P(t,e){t.forEach(a=>{a.isIntersecting&&(d.to(E,{duration:2,opacity:1,x:0,rotationX:360}),d.to(O,{duration:2,opacity:1}))})}const y=document.querySelector(".scroll-up");let h=document.documentElement.scrollTop;y.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=L;window.onload=L;function L(){h=document.documentElement.scrollTop,h>100?y.style.display="flex":y.style.display="none"}export{$ as A,F as a,N as b,H as r};
//# sourceMappingURL=main-DjYlxGqG.js.map
