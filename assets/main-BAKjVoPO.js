import{a as R,i as f,g as O,r as D}from"./vendor-DvC1QdLM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const E=R.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class S{static async getExercises(e={}){const{page:s=1,limit:i=10}=e;return(await E.get("/exercises",{params:{page:s,limit:i,...e}})).data}static async addRateByExerciseId(e,s){return(await E.patch(`/exercises/${e}/rating`,s)).data}static async getExerciseById(e){return(await E.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:s=1,limit:i=12}=e;return(await E.get("/filters",{params:{page:s,limit:i,...e}})).data}static async getQuote(){return(await E.get("/quote")).data}static async addSubscription(e){return(await E.post("/subscription",e)).data}}(()=>{if(!document.querySelector("footer"))return;const e=document.querySelector(".js-footer-form"),s=document.querySelector('input[type="email"]'),i=document.querySelector(".footer_form_btn");i.addEventListener("click",n);function a(l){return/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/.test(l)}i.disabled=!0,s.addEventListener("input",()=>{const l=s.value;a(l)?(i.classList.add("active"),i.disabled=!1,s.classList.add("active")):(i.classList.remove("active"),i.disabled=!0,s.classList.remove("active"))}),s.addEventListener("blur",()=>{const l=s.value;a(l)?i.classList.add("active"):f.error({title:"Error",message:"Invalid email address was entered."})});function n(l){l.preventDefault();const c=s.value;if(!a(c)){f.error({title:"Error",message:"Invalid email address was entered."});return}const u={email:c};S.addSubscription(u).then(d=>{const y=d.message;f.success({title:"Success",message:y})}).catch(d=>{const y=d.response.message;d.response.status===409?f.warning({title:"Warning",message:"Subscription already exists"}):d.response.status===400&&f.warning({title:"Warning",message:y})}),e.reset()}const o={root:null,rootMargin:"0px",threshold:0},m=document.querySelector(".footer_logo_icon"),h=document.querySelector(".footer_title_span");new IntersectionObserver(g,o).observe(m);function g(l,c){l.forEach(u=>{u.isIntersecting&&(O.to(m,{duration:2,opacity:1,x:0,rotationX:360}),O.to(h,{duration:2,opacity:1}))})}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".menu-link"),a=document.querySelector(".mobile-menu-overlay"),n=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")};e.addEventListener("click",n),s.addEventListener("click",n),i.forEach(o=>{o.addEventListener("click",n)}),a.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const k="exercises",H="storageUpdateCustomEvent",P=(t,e)=>t.closest(e),X=(t,e=!1)=>{if(e){const s=t.querySelector(".loader");s&&s.remove()}else t.insertAdjacentHTML("beforeend",'<div class="loader"></div>')},ee=t=>{if(Array.isArray(t))for(let e of t)e.innerHTML="";else t.innerHTML=""},v="/project-5/assets/icons-CF5Ke6TN.svg",te=(t,e)=>{const s=t.map(i=>`<li class="item"><a class="filter-link" href="#">${i}</a></li>`).join("");e.insertAdjacentHTML("beforeend",s)},se=(t,e)=>{const s=t.map(({filter:i,name:a,imgURL:n})=>`
      <li class="card-item" data-exercise="${a}">
        <a class="card-link" href="#">
          <img
            src="${n}"
            alt="${a}"
          />
          <div class="card-content">
            <div class="card-name">${a}</div>
            <div class="card-filter">${i}</div>
          </div>
        </a>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",s)},ae=(t,e,s=!1)=>{const i=t.map(({bodyPart:a,burnedCalories:n,gifUrl:o,name:m,rating:h,target:p,time:g,_id:l})=>{const c=s?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="${v}#icon-trash"></use>
              </svg>
            </a>`:`<div class="__rating">${h}</div>`;return`
      <li class="card-item" data-id="${l}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${c}
          </div>
          <div>
            <a class="__start" href="#" data-id="${l}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${o}"
            alt="${p}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${m}">${m}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${n} / ${g} min">${n} / ${g} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${a}">${a}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${p}">${p}</span>
            </li>
          </ul>
        </div>
      </li>
      `}).join("");e.insertAdjacentHTML("beforeend",i)},K=t=>{const e=Math.floor(t),s=(t-e)*100,i=(n,o="")=>`
    <li class="rating-item">
      <svg class="rating-star ${n}" width="18" height="18">
        <use href="${v}#icon-star"></use>
        ${o}
      </svg>
    </li>`;let a="";for(let n=0;n<5;n++)n<e?a+=i("full"):n==e&&s>0?a+=i("partial",`<svg class="overlay" style="clip-path:inset(0 ${100-s}% 0 0);"><use href="${v}#icon-star"></use></svg>`):a+=i("empty");return a},$=(t,e)=>{const s=`
      ${t?"Remove from favorites":"Add to favorites"}
        <svg class="favorite-icon" width="18" height="18">
          <use href="${v}#${t?"icon-trash":"icon-heart"}"></use>
        </svg>`;e.innerHTML=s,t?e.classList.add("remove"):e.classList.remove("remove")},F=(t,e,s)=>{const{bodyPart:i,burnedCalories:a,description:n,equipment:o,gifUrl:m,name:h,popularity:p,rating:g,target:l,time:c,_id:u}=t,d=`
      <div class="gif-container">
        <img class="modal-gif" src="${m}" alt="${l}" width="360" height="360">
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="exercise-name capitalize">${h}</h3>
          <ul class="rating-stars">
            <li class="rating-item">
              <p class="rating-value">${g.toFixed(1)}</p>
            </li>
            ${K(g)}
          </ul>
        </div>
        <ul class="details">
          <li class="details-item">
            <h4 class="details-header">Target</h4>
            <p class="details-value capitalize">${l}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Body Part</h4>
            <p class="details-value capitalize">${i}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Equipment</h4>
            <p class="details-value capitalize">${o}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Popular</h4>
            <p class="details-value">${p}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Burned Calories</h4>
            <p class="details-value">${a}/${c} min</p>
          </li>
        </ul>
        <p class="description">${n}</p>
      </div>`;s.innerHTML=d};function N(t){return t.map(e=>{const{name:s,linkedin:i,github:a}=e;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="${v}#icon-more"></use>
          </svg>
          <h3 class="team-name">${s}</h3>
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
                    <use href="${v}#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
              <li class="team-soc-item">
                <a
                  href="${a}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="${v}#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`}).join("")}let r={},b={},B;const T=()=>JSON.parse(localStorage.getItem(k))||[],w=t=>{const e=T();return e?e.includes(t):!1},A=()=>{document.dispatchEvent(new CustomEvent(H,{detail:T()}))},U=()=>{const t=r.favorite.dataset.id;if(!t)return;let e=T();if(!e){localStorage.setItem(k,JSON.stringify([t])),$(w(t),r.favorite),A();return}w(t)?e.splice(e.indexOf(t),1):e.push(t),localStorage.setItem(k,JSON.stringify(e)),$(w(t),r.favorite),A()},z=async t=>{try{r.container.innerHTML="";const e=await S.getExerciseById(t),s=w(t);F(e,s,r.container),$(s,r.favorite),r.favorite.dataset.id=t,r.modal.classList.toggle("is-hidden"),G(t)}catch(e){f.error({title:"Error",message:`${e}`});return}},L=()=>{r.modal.classList.toggle("is-hidden")},V=()=>{r={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]"),favorite:document.querySelector("[data-modal-favorite]")},!(!r.opener||!r.closer||!r.modal||!r.container||!r.favorite)&&(r.opener.addEventListener("click",t=>{const e=t.target.className;if(e&&e.includes("__start")){t.preventDefault();const i=P(t.target,".card-item");if(i&&i.dataset){const a=i.dataset.id;if(!a)return;z(a)}}}),r.favorite.addEventListener("click",U),r.closer.addEventListener("click",L),document.addEventListener("keydown",function(t){r.modal.classList.contains("is-hidden")||t.key==="Escape"&&L()}),r.modal.addEventListener("click",function(t){t.target===r.modal&&L()}))};function _(t){let e=document.querySelector(".raiting-value");e.innerText=`${t.toFixed(1)}`}let I=D({starSize:24,element:document.querySelector("#rater"),rateCallback:function(e,s){_(e),this.setRating(e),s()}});function W(){document.querySelector(".raiting-form input").value="",document.querySelector(".raiting-form textarea").value="",I.clear()}function J(t){try{S.addRateByExerciseId(B,{rate:I.getRating(),email:t.target[0].value,review:t.target[1].value})}catch(e){f.error({title:"Error",message:"Unable to send rate"}),console.log(e)}finally{_(0),W(),q()}}const Q=document.querySelector(".raiting-form");Q.addEventListener("submit",t=>{t.preventDefault();const e=!t.target[0].value,s=!t.target[1].value;if(e||s){f.error({title:"Error",message:"Email and comment fields should not be empty"});return}J(t)});function q(){b.modal.classList.toggle("is-hidden"),r.modal.classList.toggle("is-hidden")}const G=t=>{B=t,b={openModalBtn:document.querySelector("[data-raiting-modal-open]"),closeModalBtn:document.querySelector("[data-raiting-modal-close]"),modal:document.querySelector("[data-raiting-modal]")},b.openModalBtn.dataset.id=t,b.openModalBtn.addEventListener("click",q),b.closeModalBtn.addEventListener("click",q)};window.addEventListener("load",()=>{V()});const Y=[{name:"Roman Onishchenko",linkedin:"https://www.linkedin.com/in/onishchenko-roman/",github:"https://github.com/orm81zp"},{name:"Antonina Sych",linkedin:"https://www.linkedin.com/in/antonina-sych/",github:"https://github.com/AntoninaSych"},{name:"Kryvko Sergii",linkedin:"dd",github:"https://github.com/KryvkoSergii"},{name:"Oleksii Aleksieiev",linkedin:"https://www.linkedin.com/in/oleksii-aleksieiev-37b1b9b4/",github:"https://github.com/Gloomcat"},{name:"Sergiy Kapustin",linkedin:"https://www.linkedin.com/in/sergiyka/",github:"https://github.com/sergiy-ka"},{name:"Vitalii Kletsko",linkedin:"https://www.linkedin.com/in/vitalii-kletsko-790b4690/",github:"https://github.com/vkletsko"},{name:"Volodymyr Plakhtyna",linkedin:"https://www.linkedin.com/in/volodymyr-plakhtyna-59173285/",github:"https://github.com/VolodymyrPlay"},{name:"Bogdan Onoiko",linkedin:"https://www.linkedin.com/in/bogdanonoyko/",github:"https://github.com/DanSport"},{name:"Oleg Usatui",linkedin:"https://www.linkedin.com/in/oleg-usatyi-57a83b274/",github:"https://github.com/OlegUsatui"}];(()=>{if(!document.querySelector("footer"))return;const e=document.querySelector(".team-btn-open"),s=document.querySelector(".team-btn-close"),i=document.querySelector(".team-list"),a=document.querySelector(".team-backdrop");e.addEventListener("click",o),s.addEventListener("click",m),i.addEventListener("click",l),a.addEventListener("click",g),i.insertAdjacentHTML("beforeend",N(Y));const n=[...i.children];function o(){a.classList.remove("hidden"),window.addEventListener("keydown",p),document.body.style.overflow="hidden"}function m(){a.classList.add("hidden"),window.removeEventListener("keydown",p),document.body.style.overflow="auto",h()}function h(){n.forEach(c=>{c.lastElementChild.classList.remove("active-devel"),c.firstElementChild.classList.remove("arrow-up")})}function p(c){c.code==="Escape"&&m()}function g(c){c.currentTarget===c.target&&m()}function l(c){const u=c.target.closest(".team-item");if(!u)return;const d=u.lastElementChild,y=u.querySelector(".more-icon"),M=document.querySelector(".active-devel");console.log(u.firstElementChild),M&&M.classList.remove("active-devel"),y.classList.add("arrow-up"),u.classList.add("active-devel"),d.style.maxHeight?(d.style.maxHeight=null,u.firstElementChild.classList.remove("arrow-up")):(d.style.maxHeight=d.scrollHeight+"px",y.classList.add("arrow-up"))}})();(()=>{const t=document.getElementById("quote-text"),e=document.getElementById("quote-author");if(!t&&!e)return;async function s(){try{const i=new Date().toLocaleDateString(),a=JSON.parse(localStorage.getItem("quoteData"));if(a&&a.date===i)return a.quote;const n=await S.getQuote(),o={date:i,quote:n};return localStorage.setItem("quoteData",JSON.stringify(o)),o.quote}catch{console.log("Error during  getting quote")}}s().then(i=>{t.innerText=i.quote,e.innerText=i.author})})();const x=document.querySelector(".scroll-up");let C=document.documentElement.scrollTop;x.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=j;window.onload=j;function j(){C=document.documentElement.scrollTop,C>100?x.style.display="flex":x.style.display="none"}export{S as A,k as L,H as U,se as a,ae as b,ee as c,P as g,te as r,X as s};
//# sourceMappingURL=main-BAKjVoPO.js.map
