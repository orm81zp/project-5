import{a as I,i as c,g as u,r as A}from"./vendor-DvC1QdLM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const d=I.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class h{static async getExercises(e={}){const{page:a=1,limit:n=10}=e;return(await d.get("/exercises",{params:{page:a,limit:n,...e}})).data}static async addRateByExerciseId(e,a){return(await d.patch(`/exercises/${e}/rating`,a)).data}static async getExerciseById(e){return(await d.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:a=1,limit:n=12}=e;return(await d.get("/filters",{params:{page:a,limit:n,...e}})).data}static async getQuote(){return(await d.get("/quote")).data}static async addSubscription(e){return(await d.post("/subscription",e)).data}}const R=document.querySelector(".js-footer-form"),g=document.querySelector('input[type="email"]'),l=document.querySelector(".footer_form_btn");l.addEventListener("click",j);function x(t){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t)}l.disabled=!0;g.addEventListener("input",()=>{const t=g.value;x(t)?(l.classList.add("active"),l.disabled=!1):(l.classList.remove("active"),l.disabled=!0)});g.addEventListener("blur",()=>{const t=g.value;x(t)?l.classList.add("active"):c.error({title:"Error",message:"Invalid email address was entered."})});function j(t){t.preventDefault();const e=g.value;if(!x(e)){console.log("tyta"),c.error({title:"Error",message:"Invalid email address was entered."});return}const a={email:e};h.addSubscription(a).then(n=>{const s=n.data.message;c.success({title:"Success",message:s})}).catch(n=>{const s=n.response.data.message;n.response.status===409?c.warning({title:"Warning",message:"Subscription already exists"}):n.response.status===400&&c.warning({title:"Warning",message:s})}),R.reset()}const O=document.querySelectorAll(".footer_soc_item");O.forEach(t=>{const e=t.querySelector(".footer_soc_icon");t.addEventListener("mouseenter",()=>{u.to(t,{keyframes:{"0%":{rotation:-5},"25%":{rotation:5},"50%":{rotation:-5},"75%":{rotation:5},"100%":{rotation:0}},duration:.5,repeat:1}),u.to(e,{keyframes:{"0%":{x:-3},"25%":{x:3},"50%":{x:-3},"75%":{x:3},"100%":{x:0}},duration:.2,repeat:3})}),t.addEventListener("mouseleave",()=>{u.to(t,{rotation:0,duration:.2}),u.to(e,{x:0,duration:.2})})});const k={root:null,rootMargin:"0px",threshold:0},$=document.querySelector(".footer_logo_icon"),z=document.querySelector(".footer_title_span"),D=new IntersectionObserver(P,k);D.observe($);function P(t,e){t.forEach(a=>{a.isIntersecting&&(u.to($,{duration:2,opacity:1,x:0,rotationX:360}),u.to(z,{duration:2,opacity:1}))})}(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".menu-link"),s=document.querySelector(".mobile-menu-overlay"),o=()=>{const r=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!r),t.classList.toggle("is-open")};e.addEventListener("click",o),a.addEventListener("click",o),n.forEach(r=>{r.addEventListener("click",o)}),s.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const K=(t,e)=>{const a=t.map(n=>`<li class="item"><a href="#">${n}</a></li>`).join("");e.insertAdjacentHTML("beforeend",a)},G=(t,e)=>{const a=t.map(({filter:n,name:s,imgURL:o})=>`
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
      `).join("");e.insertAdjacentHTML("beforeend",a)},X=(t,e,a=!1)=>{const n=t.map(({bodyPart:s,burnedCalories:o,gifUrl:r,name:f,rating:b,target:m,time:p,_id:v})=>{const S=a?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="../../img/icons.svg#icon-trash"></use>
              </svg>
            </a>`:`<div class="__rating">${b}</div>`;return`
      <li class="card-item" data-id="${v}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${S}
          </div>
          <div>
            <a class="__start" href="#" data-id="${v}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${r}"
            alt="${m}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${f}">${f}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${o} / ${p} min">${o} / ${p} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${s}">${s}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${m}">${m}</span>
            </li>
          </ul>
        </div>
      </li>
      `}).join("");e.insertAdjacentHTML("beforeend",n)},F=(t,e)=>{const{bodyPart:a,burnedCalories:n,description:s,equipment:o,gifUrl:r,name:f,popularity:b,rating:m,target:p,time:v,_id:S}=t,B=`
      <div class="modal-gif-container">
        <img class="modal-gif" src="${r}" alt="${p}">
      </div>
      <div class="modal-content">
        <h2>${f}</h2>
        <div class="modal-rating">
            <span>${m}</span>
            <span class="modal-stars">★★★★☆</span>
        </div>
        <div class="modal-details">
            <p><strong>Target:</strong> ${p}</p>
            <p><strong>Body Part:</strong> ${a}</p>
            <p><strong>Equipment:</strong> ${o}</p>
            <p><strong>Popular:</strong> ${b}</p>
            <p><strong>Burned Calories:</strong> ${n}/${v} min</p>
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
            <button class="modal-rating-button" data-raiting-modal-open>Give a rating</button>
          </li>
        </div>
      </div>
      `;e.innerHTML=B};let i={},y={},w;const N=async t=>{try{const e=await h.getExerciseById(t);F(e,i.container),i.modal.classList.toggle("is-hidden"),W(e._id)}catch(e){console.log(e)}},H=()=>{i={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]")},!(!i.opener||!i.closer||!i.modal||!i.container)&&(i.opener.addEventListener("click",t=>{const e=t.target;if(e.nodeName!=="A")return;const a=e.dataset.id;a&&N(a)}),i.closer.addEventListener("click",()=>{i.modal.classList.toggle("is-hidden"),i.container.innerHTML=""}))};function M(t){let e=document.querySelector(".raiting-value");e.innerText=`${t.toFixed(1)}`}let T=A({starSize:24,element:document.querySelector("#rater"),rateCallback:function(e,a){M(e),this.setRating(e),a()}});function Q(){document.querySelector(".raiting-form input").value="",document.querySelector(".raiting-form textarea").value="",T.clear()}function C(t){try{h.addRateByExerciseId(w,{rate:T.getRating(),email:t.target[0].value,review:t.target[1].value})}catch(e){c.error({title:"Error",message:"Unable to send rate"}),console.log(e)}finally{M(0),Q(),E()}}const U=document.querySelector(".raiting-form");U.addEventListener("submit",t=>{t.preventDefault();const e=!t.target[0].value,a=!t.target[1].value;if(e||a){c.error({title:"Error",message:"Email and comment fields should not be empty"});return}C(t)});function E(){y.modal.classList.toggle("is-hidden"),i.modal.classList.toggle("is-hidden")}const W=t=>{w=t,y={openModalBtn:document.querySelector("[data-raiting-modal-open]"),closeModalBtn:document.querySelector("[data-raiting-modal-close]"),modal:document.querySelector("[data-raiting-modal]")},y.openModalBtn.addEventListener("click",E),y.closeModalBtn.addEventListener("click",E)};window.addEventListener("load",()=>{H()});async function V(){try{const t=new Date().toLocaleDateString(),e=JSON.parse(localStorage.getItem("quoteData"));if(e&&e.date===t)return e.quote;let a=await h.getQuote();const n={date:t,quote:a};return localStorage.setItem("quoteData",JSON.stringify(n)),n.quote}catch{console.log("Error during  getting quote")}}V().then(t=>{document.getElementById("quote_text").innerText=t.quote,document.getElementById("quote_author").innerText=t.author});const q=document.querySelector(".scroll-up");let L=document.documentElement.scrollTop;q.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=_;window.onload=_;function _(){L=document.documentElement.scrollTop,L>100?q.style.display="flex":q.style.display="none"}export{h as A,G as a,X as b,K as r};
//# sourceMappingURL=main-Ownt9dzo.js.map
