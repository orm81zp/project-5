import{a as R,i as v,g as b,r as D}from"./vendor-DvC1QdLM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const S=R.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class L{static async getExercises(e={}){const{page:a=1,limit:i=10}=e;return(await S.get("/exercises",{params:{page:a,limit:i,...e}})).data}static async addRateByExerciseId(e,a){return(await S.patch(`/exercises/${e}/rating`,a)).data}static async getExerciseById(e){return(await S.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:a=1,limit:i=12}=e;return(await S.get("/filters",{params:{page:a,limit:i,...e}})).data}static async getQuote(){return(await S.get("/quote")).data}static async addSubscription(e){return(await S.post("/subscription",e)).data}}(()=>{if(!document.querySelector("footer"))return;const e=document.querySelector(".js-footer-form"),a=document.querySelector('input[type="email"]'),i=document.querySelector(".footer_form_btn");i.addEventListener("click",n);function s(o){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(o)}i.disabled=!0,a.addEventListener("input",()=>{const o=a.value;s(o)?(i.classList.add("active"),i.disabled=!1):(i.classList.remove("active"),i.disabled=!0)}),a.addEventListener("blur",()=>{const o=a.value;s(o)?i.classList.add("active"):v.error({title:"Error",message:"Invalid email address was entered."})});function n(o){o.preventDefault();const l=a.value;if(!s(l)){console.log("tyta"),v.error({title:"Error",message:"Invalid email address was entered."});return}const d={email:l};L.addSubscription(d).then(h=>{const E=h.data.message;v.success({title:"Success",message:E})}).catch(h=>{const E=h.response.data.message;h.response.status===409?v.warning({title:"Warning",message:"Subscription already exists"}):h.response.status===400&&v.warning({title:"Warning",message:E})}),e.reset()}document.querySelectorAll(".footer_soc_item").forEach(o=>{const l=o.querySelector(".footer_soc_icon");o.addEventListener("mouseenter",()=>{b.to(o,{keyframes:{"0%":{rotation:-5},"25%":{rotation:5},"50%":{rotation:-5},"75%":{rotation:5},"100%":{rotation:0}},duration:.5,repeat:1}),b.to(l,{keyframes:{"0%":{x:-3},"25%":{x:3},"50%":{x:-3},"75%":{x:3},"100%":{x:0}},duration:.2,repeat:3})}),o.addEventListener("mouseleave",()=>{b.to(o,{rotation:0,duration:.2}),b.to(l,{x:0,duration:.2})})});const u={root:null,rootMargin:"0px",threshold:0},g=document.querySelector(".footer_logo_icon"),m=document.querySelector(".footer_title_span");new IntersectionObserver(p,u).observe(g);function p(o,l){o.forEach(d=>{d.isIntersecting&&(b.to(g,{duration:2,opacity:1,x:0,rotationX:360}),b.to(m,{duration:2,opacity:1}))})}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".menu-link"),s=document.querySelector(".mobile-menu-overlay"),n=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open")};e.addEventListener("click",n),a.addEventListener("click",n),i.forEach(c=>{c.addEventListener("click",n)}),s.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const $="exercises",H="storageUpdateCustomEvent",P=(t,e)=>t.closest(e),Z=(t,e=!1)=>{if(e){const a=t.querySelector(".loader");a&&a.remove()}else t.insertAdjacentHTML("beforeend",'<div class="loader"></div>')},ee=t=>{if(Array.isArray(t))for(let e of t)e.innerHTML="";else t.innerHTML=""},y="/project-5/assets/icons-CF5Ke6TN.svg",te=(t,e)=>{const a=t.map(i=>`<li class="item"><a class="filter-link" href="#">${i}</a></li>`).join("");e.insertAdjacentHTML("beforeend",a)},se=(t,e)=>{const a=t.map(({filter:i,name:s,imgURL:n})=>`
      <li class="card-item" data-exercise="${s}">
        <a class="card-link" href="#">
          <img
            src="${n}"
            alt="${s}"
          />
          <div class="card-content">
            <div class="card-name">${s}</div>
            <div class="card-filter">${i}</div>
          </div>
        </a>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",a)},ae=(t,e,a=!1)=>{const i=t.map(({bodyPart:s,burnedCalories:n,gifUrl:c,name:u,rating:g,target:m,time:f,_id:p})=>{const o=a?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="${y}#icon-trash"></use>
              </svg>
            </a>`:`<div class="__rating">${g}</div>`;return`
      <li class="card-item" data-id="${p}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${o}
          </div>
          <div>
            <a class="__start" href="#" data-id="${p}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${c}"
            alt="${m}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${u}">${u}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${n} / ${f} min">${n} / ${f} min</span>
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
      `}).join("");e.insertAdjacentHTML("beforeend",i)},z=t=>{const e=Math.floor(t),a=(t-e)*100,i=(n,c="")=>`
    <li class="rating-item">
      <svg class="rating-star ${n}" width="18" height="18">
        <use href="${y}#icon-star"></use>
        ${c}
      </svg>
    </li>`;let s="";for(let n=0;n<5;n++)n<e?s+=i("full"):n==e&&a>0?s+=i("partial",`<svg class="overlay" style="clip-path:inset(0 ${100-a}% 0 0);"><use href="${y}#icon-star"></use></svg>`):s+=i("empty");return s},q=(t,e)=>{const a=`
      ${t?"Remove from favorites":"Add to favorites"}
        <svg class="favorite-icon" width="18" height="18">
          <use href="${y}#${t?"icon-trash":"icon-heart"}"></use>
        </svg>`;e.innerHTML=a,t?e.classList.add("remove"):e.classList.remove("remove")},K=(t,e,a)=>{const{bodyPart:i,burnedCalories:s,description:n,equipment:c,gifUrl:u,name:g,popularity:m,rating:f,target:p,time:o,_id:l}=t,d=`
      <div class="gif-container">
        <img class="modal-gif" src="${u}" alt="${p}" width="360" height="360">
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="exercise-name capitalize">${g}</h3>
          <ul class="rating-stars">
            <li class="rating-item">
              <p class="rating-value">${f.toFixed(1)}</p>
            </li>
            ${z(f)}
          </ul>
        </div>
        <ul class="details">
          <li class="details-item">
            <h4 class="details-header">Target</h4>
            <p class="details-value capitalize">${p}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Body Part</h4>
            <p class="details-value capitalize">${i}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Equipment</h4>
            <p class="details-value capitalize">${c}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Popular</h4>
            <p class="details-value">${m}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Burned Calories</h4>
            <p class="details-value">${s}/${o} min</p>
          </li>
        </ul>
        <p class="description">${n}</p>
      </div>`;a.innerHTML=d};function F(t){return t.map(e=>{const{name:a,linkedin:i,github:s}=e;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="${y}#icon-more"></use>
          </svg>
          <h3 class="team-name">${a}</h3>
          <div class="hidden-content">
            <ul class="team-soc-list">
              <li class="team-soc-item">
                <a
                  href="${i}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="${y}#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
              <li class="team-soc-item">
                <a
                  href="${s}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="${y}#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`}).join("")}let r={},k={},C;const O=()=>JSON.parse(localStorage.getItem($))||[],w=t=>{const e=O();return e?e.includes(t):!1},_=()=>{document.dispatchEvent(new CustomEvent(H,{detail:O()}))},N=()=>{const t=r.favorite.dataset.id;if(!t)return;let e=O();if(!e){localStorage.setItem($,JSON.stringify([t])),q(w(t),r.favorite),_();return}w(t)?e.splice(e.indexOf(t),1):e.push(t),localStorage.setItem($,JSON.stringify(e)),q(w(t),r.favorite),_()},U=async t=>{try{r.container.innerHTML="";const e=await L.getExerciseById(t),a=w(t);K(e,a,r.container),q(a,r.favorite),r.favorite.dataset.id=t,r.modal.classList.toggle("is-hidden"),G(t)}catch(e){v.error({title:"Error",message:`${e}`});return}},x=()=>{r.modal.classList.toggle("is-hidden")},V=()=>{r={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]"),favorite:document.querySelector("[data-modal-favorite]")},!(!r.opener||!r.closer||!r.modal||!r.container||!r.favorite)&&(r.opener.addEventListener("click",t=>{const e=t.target.className;if(e&&e.includes("__start")){t.preventDefault();const i=P(t.target,".card-item");if(i&&i.dataset){const s=i.dataset.id;if(!s)return;U(s)}}}),r.favorite.addEventListener("click",N),r.closer.addEventListener("click",x),document.addEventListener("keydown",function(t){r.modal.classList.contains("is-hidden")||t.key==="Escape"&&x()}),r.modal.addEventListener("click",function(t){t.target===r.modal&&x()}))};function B(t){let e=document.querySelector(".raiting-value");e.innerText=`${t.toFixed(1)}`}let I=D({starSize:24,element:document.querySelector("#rater"),rateCallback:function(e,a){B(e),this.setRating(e),a()}});function W(){document.querySelector(".raiting-form input").value="",document.querySelector(".raiting-form textarea").value="",I.clear()}function J(t){try{L.addRateByExerciseId(C,{rate:I.getRating(),email:t.target[0].value,review:t.target[1].value})}catch(e){v.error({title:"Error",message:"Unable to send rate"}),console.log(e)}finally{B(0),W(),T()}}const Q=document.querySelector(".raiting-form");Q.addEventListener("submit",t=>{t.preventDefault();const e=!t.target[0].value,a=!t.target[1].value;if(e||a){v.error({title:"Error",message:"Email and comment fields should not be empty"});return}J(t)});function T(){k.modal.classList.toggle("is-hidden"),r.modal.classList.toggle("is-hidden")}const G=t=>{C=t,k={openModalBtn:document.querySelector("[data-raiting-modal-open]"),closeModalBtn:document.querySelector("[data-raiting-modal-close]"),modal:document.querySelector("[data-raiting-modal]")},k.openModalBtn.dataset.id=t,k.openModalBtn.addEventListener("click",T),k.closeModalBtn.addEventListener("click",T)};window.addEventListener("load",()=>{V()});const Y=[{name:"Roman Onishchenko",linkedin:"https://www.linkedin.com/in/onishchenko-roman/",github:"https://github.com/orm81zp"},{name:"Antonina Sych",linkedin:"https://www.linkedin.com/in/antonina-sych/",github:"https://github.com/AntoninaSych"},{name:"Kryvko Sergii",linkedin:"dd",github:"https://github.com/KryvkoSergii"},{name:"Oleksii Aleksieiev",linkedin:"https://www.linkedin.com/in/oleksii-aleksieiev-37b1b9b4/",github:"https://github.com/Gloomcat"},{name:"Sergiy Kapustin",linkedin:"https://www.linkedin.com/in/sergiyka/",github:"https://github.com/sergiy-ka"},{name:"Vitalii Kletsko",linkedin:"https://www.linkedin.com/in/vitalii-kletsko-790b4690/",github:"https://github.com/vkletsko"},{name:"Volodymyr Plakhtyna",linkedin:"https://www.linkedin.com/in/volodymyr-plakhtyna-59173285/",github:"https://github.com/VolodymyrPlay"},{name:"Bogdan Onoiko",linkedin:"https://www.linkedin.com/in/bogdanonoyko/",github:"https://github.com/DanSport"},{name:"Oleg Usatui",linkedin:"https://www.linkedin.com/in/oleg-usatyi-57a83b274/",github:"https://github.com/OlegUsatui"}];(()=>{if(!document.querySelector("footer"))return;const e=document.querySelector(".team-btn-open"),a=document.querySelector(".team-btn-close"),i=document.querySelector(".team-list"),s=document.querySelector(".team-backdrop");e.addEventListener("click",c),a.addEventListener("click",u),i.addEventListener("click",p),s.addEventListener("click",f),i.insertAdjacentHTML("beforeend",F(Y));const n=[...i.children];function c(){s.classList.remove("hidden"),window.addEventListener("keydown",m),document.body.style.overflow="hidden"}function u(){s.classList.add("hidden"),window.removeEventListener("keydown",m),document.body.style.overflow="auto",g()}function g(){n.forEach(o=>{o.lastElementChild.classList.remove("active-devel"),o.firstElementChild.classList.remove("arrow-up")})}function m(o){o.code==="Escape"&&u()}function f(o){o.currentTarget===o.target&&u()}function p(o){const l=o.target.closest(".team-item");if(!l)return;const d=l.lastElementChild,h=l.querySelector(".more-icon"),E=document.querySelector(".active-devel");console.log(l.firstElementChild),E&&E.classList.remove("active-devel"),h.classList.add("arrow-up"),l.classList.add("active-devel"),d.style.maxHeight?(d.style.maxHeight=null,l.firstElementChild.classList.remove("arrow-up")):(d.style.maxHeight=d.scrollHeight+"px",h.classList.add("arrow-up"))}})();(()=>{const t=document.getElementById("quote-text"),e=document.getElementById("quote-author");if(!t&&!e)return;async function a(){try{const i=new Date().toLocaleDateString(),s=JSON.parse(localStorage.getItem("quoteData"));if(s&&s.date===i)return s.quote;const n=await L.getQuote(),c={date:i,quote:n};return localStorage.setItem("quoteData",JSON.stringify(c)),c.quote}catch{console.log("Error during  getting quote")}}a().then(i=>{t.innerText=i.quote,e.innerText=i.author})})();const M=document.querySelector(".scroll-up");let A=document.documentElement.scrollTop;M.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=j;window.onload=j;function j(){A=document.documentElement.scrollTop,A>100?M.style.display="flex":M.style.display="none"}export{L as A,$ as L,H as U,se as a,ae as b,ee as c,P as g,te as r,Z as s};
//# sourceMappingURL=main-CsdcLvp-.js.map
