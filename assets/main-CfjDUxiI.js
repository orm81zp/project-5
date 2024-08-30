import{a as O,i as f,g as b,r as T}from"./vendor-DvC1QdLM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const k=O.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class E{static async getExercises(e={}){const{page:n=1,limit:s=10}=e;return(await k.get("/exercises",{params:{page:n,limit:s,...e}})).data}static async addRateByExerciseId(e,n){return(await k.patch(`/exercises/${e}/rating`,n)).data}static async getExerciseById(e){return(await k.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:n=1,limit:s=12}=e;return(await k.get("/filters",{params:{page:n,limit:s,...e}})).data}static async getQuote(){return(await k.get("/quote")).data}static async addSubscription(e){return(await k.post("/subscription",e)).data}}(()=>{if(!document.querySelector("footer"))return;const e=document.querySelector(".js-footer-form"),n=document.querySelector('input[type="email"]'),s=document.querySelector(".footer_form_btn");s.addEventListener("click",a);function t(i){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(i)}s.disabled=!0,n.addEventListener("input",()=>{const i=n.value;t(i)?(s.classList.add("active"),s.disabled=!1):(s.classList.remove("active"),s.disabled=!0)}),n.addEventListener("blur",()=>{const i=n.value;t(i)?s.classList.add("active"):f.error({title:"Error",message:"Invalid email address was entered."})});function a(i){i.preventDefault();const c=n.value;if(!t(c)){console.log("tyta"),f.error({title:"Error",message:"Invalid email address was entered."});return}const m={email:c};E.addSubscription(m).then(v=>{const y=v.data.message;f.success({title:"Success",message:y})}).catch(v=>{const y=v.response.data.message;v.response.status===409?f.warning({title:"Warning",message:"Subscription already exists"}):v.response.status===400&&f.warning({title:"Warning",message:y})}),e.reset()}document.querySelectorAll(".footer_soc_item").forEach(i=>{const c=i.querySelector(".footer_soc_icon");i.addEventListener("mouseenter",()=>{b.to(i,{keyframes:{"0%":{rotation:-5},"25%":{rotation:5},"50%":{rotation:-5},"75%":{rotation:5},"100%":{rotation:0}},duration:.5,repeat:1}),b.to(c,{keyframes:{"0%":{x:-3},"25%":{x:3},"50%":{x:-3},"75%":{x:3},"100%":{x:0}},duration:.2,repeat:3})}),i.addEventListener("mouseleave",()=>{b.to(i,{rotation:0,duration:.2}),b.to(c,{x:0,duration:.2})})});const d={root:null,rootMargin:"0px",threshold:0},g=document.querySelector(".footer_logo_icon"),u=document.querySelector(".footer_title_span");new IntersectionObserver(h,d).observe(g);function h(i,c){i.forEach(m=>{m.isIntersecting&&(b.to(g,{duration:2,opacity:1,x:0,rotationX:360}),b.to(u,{duration:2,opacity:1}))})}})();(()=>{const o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),s=document.querySelectorAll(".menu-link"),t=document.querySelector(".mobile-menu-overlay"),a=()=>{const r=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!r),o.classList.toggle("is-open")};e.addEventListener("click",a),n.addEventListener("click",a),s.forEach(r=>{r.addEventListener("click",a)}),t.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const K=(o,e)=>{const n=o.map(s=>`<li class="item"><a href="#">${s}</a></li>`).join("");e.insertAdjacentHTML("beforeend",n)},W=(o,e)=>{const n=o.map(({filter:s,name:t,imgURL:a})=>`
      <li class="card-item">
        <a class="card-link" href="#">
          <img
            src="${a}"
            alt="${t}"
          />
          <div class="card-content" data-category="${t}">
            <div class="card-name">${t}</div>
            <div class="card-filter">${s}</div>
          </div>
        </a>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",n)},V=(o,e,n=!1)=>{const s=o.map(({bodyPart:t,burnedCalories:a,gifUrl:r,name:d,rating:g,target:u,time:p,_id:h})=>{const i=n?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="../../img/icons.svg#icon-trash"></use>
              </svg>
            </a>`:`<div class="__rating">${g}</div>`;return`
      <li class="card-item" data-id="${h}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${i}
          </div>
          <div>
            <a class="__start" href="#" data-id="${h}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${r}"
            alt="${u}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${d}">${d}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${a} / ${p} min">${a} / ${p} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${t}">${t}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${u}">${u}</span>
            </li>
          </ul>
        </div>
      </li>
      `}).join("");e.insertAdjacentHTML("beforeend",s)},B=(o,e)=>{const{bodyPart:n,burnedCalories:s,description:t,equipment:a,gifUrl:r,name:d,popularity:g,rating:u,target:p,time:h,_id:i}=o,c=`
      <div class="modal-gif-container">
        <img class="modal-gif" src="${r}" alt="${p}">
      </div>
      <div class="modal-content">
        <h2>${d}</h2>
        <div class="modal-rating">
            <span>${u}</span>
            <span class="modal-stars">★★★★☆</span>
        </div>
        <div class="modal-details">
            <p><strong>Target:</strong> ${p}</p>
            <p><strong>Body Part:</strong> ${n}</p>
            <p><strong>Equipment:</strong> ${a}</p>
            <p><strong>Popular:</strong> ${g}</p>
            <p><strong>Burned Calories:</strong> ${s}/${h} min</p>
        </div>
        <p class="description">${t}</p>
        <ul class="modal-controls" data-id=${i}>
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
      `;e.innerHTML=c};function A(o){return o.map(e=>{const{name:n,linkedin:s,github:t}=e;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="../../img/icons.svg#icon-more"></use>
          </svg>
          <h3 class="team-name">${n}</h3>
          <div class="hidden-content">
            <ul class="team-soc-list">
              <li class="team-soc-item">
                <a
                  href="${s}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="../../img/icons.svg#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
              <li class="team-soc-item">
                <a
                  href="${t}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="../../img/icons.svg#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`}).join("")}let l={},w={},x;const C=async o=>{try{const e=await E.getExerciseById(o);B(e,l.container),l.modal.classList.toggle("is-hidden"),P(e._id)}catch(e){console.log(e)}},I=()=>{l={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]")},!(!l.opener||!l.closer||!l.modal||!l.container)&&(l.opener.addEventListener("click",o=>{const e=o.target;if(e.nodeName!=="A")return;const n=e.dataset.id;n&&C(n)}),l.closer.addEventListener("click",()=>{l.modal.classList.toggle("is-hidden"),l.container.innerHTML=""}))};function $(o){let e=document.querySelector(".raiting-value");e.innerText=`${o.toFixed(1)}`}let M=T({starSize:24,element:document.querySelector("#rater"),rateCallback:function(e,n){$(e),this.setRating(e),n()}});function R(){document.querySelector(".raiting-form input").value="",document.querySelector(".raiting-form textarea").value="",M.clear()}function j(o){try{E.addRateByExerciseId(x,{rate:M.getRating(),email:o.target[0].value,review:o.target[1].value})}catch(e){f.error({title:"Error",message:"Unable to send rate"}),console.log(e)}finally{$(0),R(),S()}}const D=document.querySelector(".raiting-form");D.addEventListener("submit",o=>{o.preventDefault();const e=!o.target[0].value,n=!o.target[1].value;if(e||n){f.error({title:"Error",message:"Email and comment fields should not be empty"});return}j(o)});function S(){w.modal.classList.toggle("is-hidden"),l.modal.classList.toggle("is-hidden")}const P=o=>{x=o,w={openModalBtn:document.querySelector("[data-raiting-modal-open]"),closeModalBtn:document.querySelector("[data-raiting-modal-close]"),modal:document.querySelector("[data-raiting-modal]")},w.openModalBtn.addEventListener("click",S),w.closeModalBtn.addEventListener("click",S)};window.addEventListener("load",()=>{I()});(()=>{const o=document.getElementById("quote-text"),e=document.getElementById("quote-author");if(!o&&!e)return;async function n(){try{const s=new Date().toLocaleDateString(),t=JSON.parse(localStorage.getItem("quoteData"));if(t&&t.date===s)return t.quote;const a=await E.getQuote(),r={date:s,quote:a};return localStorage.setItem("quoteData",JSON.stringify(r)),r.quote}catch{console.log("Error during  getting quote")}}n().then(s=>{o.innerText=s.quote,e.innerText=s.author})})();const L=document.querySelector(".scroll-up");let q=document.documentElement.scrollTop;L.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=_;window.onload=_;function _(){q=document.documentElement.scrollTop,q>100?L.style.display="flex":L.style.display="none"}const z=[{name:"Roman Onishchenko",linkedin:"https://www.linkedin.com/in/onishchenko-roman/",github:"https://github.com/orm81zp"},{name:"Antonina Sych",linkedin:"https://www.linkedin.com/in/antonina-sych/",github:"https://github.com/AntoninaSych"},{name:"Kryvko Sergii",linkedin:"dd",github:"https://github.com/KryvkoSergii"},{name:"Oleksii Aleksieiev",linkedin:"https://www.linkedin.com/in/oleksii-aleksieiev-37b1b9b4/",github:"https://github.com/Gloomcat"},{name:"Sergiy Kapustin",linkedin:"https://www.linkedin.com/in/sergiyka/",github:"https://github.com/sergiy-ka"},{name:"Vitalii Kletsko",linkedin:"https://www.linkedin.com/in/vitalii-kletsko-790b4690/",github:"https://github.com/vkletsko"},{name:"Volodymyr Plakhtyna",linkedin:"https://www.linkedin.com/in/volodymyr-plakhtyna-59173285/",github:"https://github.com/VolodymyrPlay"},{name:"Bogdan Onoiko",linkedin:"https://www.linkedin.com/in/bogdanonoyko/",github:"https://github.com/DanSport"},{name:"Oleg Usatui",linkedin:"https://www.linkedin.com/in/oleg-usatyi-57a83b274/",github:"https://github.com/OlegUsatui"}];(()=>{if(!document.querySelector("footer"))return;const e=document.querySelector(".team-btn-open"),n=document.querySelector(".team-btn-close"),s=document.querySelector(".team-list"),t=document.querySelector(".team-backdrop");e.addEventListener("click",r),n.addEventListener("click",d),s.addEventListener("click",h),t.addEventListener("click",p),s.insertAdjacentHTML("beforeend",A(z));const a=[...s.children];function r(){t.classList.remove("hidden"),window.addEventListener("keydown",u),document.body.style.overflow="hidden"}function d(){t.classList.add("hidden"),window.removeEventListener("keydown",u),document.body.style.overflow="auto",g()}function g(){a.forEach(i=>{i.lastElementChild.classList.remove("active-devel"),i.firstElementChild.classList.remove("arrow-up")})}function u(i){i.code==="Escape"&&d()}function p(i){i.currentTarget===i.target&&d()}function h(i){const c=i.target.closest(".team-item");if(!c)return;const m=c.lastElementChild,v=c.querySelector(".more-icon"),y=document.querySelector(".active-devel");console.log(c.firstElementChild),y&&y.classList.remove("active-devel"),v.classList.add("arrow-up"),c.classList.add("active-devel"),m.style.maxHeight?(m.style.maxHeight=null,c.firstElementChild.classList.remove("arrow-up")):(m.style.maxHeight=m.scrollHeight+"px",v.classList.add("arrow-up"))}})();export{E as A,W as a,V as b,K as r};
//# sourceMappingURL=main-CfjDUxiI.js.map
