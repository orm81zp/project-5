import{a as D,i as h,g as O,r as H}from"./vendor-DvC1QdLM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const w=D.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class L{static async getExercises(t={}){const{page:s=1,limit:a=10}=t;return(await w.get("/exercises",{params:{page:s,limit:a,...t}})).data}static async addRateByExerciseId(t,s){return(await w.patch(`/exercises/${t}/rating`,s)).data}static async getExerciseById(t){return(await w.get(`/exercises/${t}`)).data}static async getFilters(t={}){const{page:s=1,limit:a=12}=t;return(await w.get("/filters",{params:{page:s,limit:a,...t}})).data}static async getQuote(){return(await w.get("/quote")).data}static async addSubscription(t){return(await w.post("/subscription",t)).data}}(()=>{if(!document.querySelector("footer"))return;const t=document.querySelector(".js-footer-form"),s=document.querySelector('input[type="email"]'),a=document.querySelector(".footer_form_btn");a.addEventListener("click",n);function i(c){return/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/.test(c)}a.disabled=!0,s.addEventListener("input",()=>{const c=s.value;i(c)?(a.classList.add("active"),a.disabled=!1,s.classList.add("active")):(a.classList.remove("active"),a.disabled=!0,s.classList.remove("active"))}),s.addEventListener("blur",()=>{const c=s.value;c!==""&&(i(c)?a.classList.add("active"):h.error({title:"Error",message:"Invalid email address was entered."}))});function n(c){c.preventDefault();const l=s.value;if(!i(l)){h.error({title:"Error",message:"Invalid email address was entered."});return}const u={email:l};L.addSubscription(u).then(d=>{const y=d.message;h.success({title:"Success",message:y}),a.disabled=!0,s.classList.remove("active"),a.classList.remove("active")}).catch(d=>{const y=d.response.message;d.response.status===409?h.warning({title:"Warning",message:"Subscription already exists"}):d.response.status===400&&h.warning({title:"Warning",message:y})}),t.reset()}const o={root:null,rootMargin:"0px",threshold:0},m=document.querySelector(".footer_logo_icon"),v=document.querySelector(".footer_title_span");new IntersectionObserver(g,o).observe(m);function g(c,l){c.forEach(u=>{u.isIntersecting&&(O.to(m,{duration:2,opacity:1,x:0,rotationX:360}),O.to(v,{duration:2,opacity:1}))})}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".menu-link"),i=document.querySelector(".mobile-menu-overlay"),n=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")};t.addEventListener("click",n),s.addEventListener("click",n),a.forEach(o=>{o.addEventListener("click",n)}),i.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();const k="exercises",P="storageUpdateCustomEvent",A=(e,t)=>e.closest(t),ee=(e,t=!1)=>{if(t){const s=e.querySelector(".loader");s&&s.remove()}else e.insertAdjacentHTML("beforeend",'<div class="loader"></div>')},te=e=>{if(Array.isArray(e))for(let t of e)t.innerHTML="";else e.innerHTML=""},f="/project-5/assets/icons-C2d4C28r.svg",K=e=>e%1?`${Math.round(e*10)/10}`:`${e}.0`,se=(e,t)=>{const s=e.map(a=>`<li class="item"><a class="filter-link" href="#">${a}</a></li>`).join("");t.insertAdjacentHTML("beforeend",s)},ae=(e,t)=>{const s=e.map(({filter:a,name:i,imgURL:n})=>`
      <li class="card-item" data-exercise="${i}">
        <a class="card-link" href="#">
          <img
            src="${n}"
            alt="${i}"
          />
          <div class="card-content">
            <div class="card-name">${i}</div>
            <div class="card-filter">${a}</div>
          </div>
        </a>
      </li>
      `).join("");t.insertAdjacentHTML("beforeend",s)},ie=(e,t,s=!1)=>{const a=e.map(({bodyPart:i,burnedCalories:n,gifUrl:o,name:m,rating:v,target:p,time:g,_id:c})=>{const l=s?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="${f}#icon-trash"></use>
              </svg>
            </a>`:`<div class="exercises-ratio">
              <p class="ratio-value">${K(v)}</p>
              <svg class="icon-star ratio-star" width="20" height="20">
                <use href="${f}#icon-star"></use>
                </svg>
            </div>`;return`
      <li class="card-item" data-id="${c}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${l}
          </div>
          <button class="modal-exercise-info" type="button" data-id="${c}">
            <span>Start</span>
            <svg class="icon-arrow-right icon-arrow" width="12" height="12">
              <use href="${f}#icon-arrow-right"></use>
            </svg>
          </button>
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
              <span class="item-name">Body part:</span><span class="item-value" title="${i}">${i}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${p}">${p}</span>
            </li>
          </ul>
        </div>
      </li>
      `}).join("");t.insertAdjacentHTML("beforeend",a)},F=e=>{const t=Math.floor(e),s=(e-t)*100,a=(n,o="")=>`
    <li class="rating-item">
      <svg class="rating-star ${n}" width="18" height="18">
        <use href="${f}#icon-star"></use>
        ${o}
      </svg>
    </li>`;let i="";for(let n=0;n<5;n++)n<t?i+=a("full"):n==t&&s>0?i+=a("partial",`<svg class="overlay" style="clip-path:inset(0 ${100-s}% 0 0);"><use href="${f}#icon-star"></use></svg>`):i+=a("empty");return i},$=(e,t)=>{const s=`
      ${e?"Remove from favorites":"Add to favorites"}
        <svg class="favorite-icon" width="18" height="18">
          <use href="${f}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>`;t.innerHTML=s,e?t.classList.add("remove"):t.classList.remove("remove")},U=(e,t,s)=>{const{bodyPart:a,burnedCalories:i,description:n,equipment:o,gifUrl:m,name:v,popularity:p,rating:g,target:c,time:l,_id:u}=e,d=`
      <div class="gif-container">
        <img class="modal-gif" src="${m}" alt="${c}" width="360" height="360">
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="exercise-name capitalize">${v}</h3>
          <ul class="rating-stars">
            <li class="rating-item">
              <p class="rating-value">${g.toFixed(1)}</p>
            </li>
            ${F(g)}
          </ul>
        </div>
        <ul class="details">
          <li class="details-item">
            <h4 class="details-header">Target</h4>
            <p class="details-value capitalize">${c}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Body Part</h4>
            <p class="details-value capitalize">${a}</p>
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
            <p class="details-value">${i}/${l} min</p>
          </li>
        </ul>
        <p class="description">${n}</p>
      </div>`;s.innerHTML=d};function z(e){return e.map(t=>{const{name:s,linkedin:a,github:i}=t;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="${f}#icon-more"></use>
          </svg>
          <h3 class="team-name">${s}</h3>
          <div class="hidden-content">
            <ul class="team-soc-list">
              <li class="team-soc-item">
                <a
                  href="${a}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="${f}#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
              <li class="team-soc-item">
                <a
                  href="${i}"
                  class="team-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="team-icon" width="28" height="28">
                    <use href="${f}#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`}).join("")}let r={},b={},I;const T=()=>JSON.parse(localStorage.getItem(k))||[],E=e=>{const t=T();return t?t.includes(e):!1},C=()=>{document.dispatchEvent(new CustomEvent(P,{detail:T()}))},N=()=>{const e=r.favorite.dataset.id;if(!e)return;let t=T();if(!t){localStorage.setItem(k,JSON.stringify([e])),$(E(e),r.favorite),C();return}E(e)?t.splice(t.indexOf(e),1):t.push(e),localStorage.setItem(k,JSON.stringify(t)),$(E(e),r.favorite),C()},V=async e=>{try{r.container.innerHTML="";const t=await L.getExerciseById(e),s=E(e);U(t,s,r.container),$(s,r.favorite),r.favorite.dataset.id=e,r.modal.classList.toggle("is-hidden"),G(e)}catch(t){h.error({title:"Error",message:`${t}`});return}},S=()=>{r.modal.classList.toggle("is-hidden")},W=()=>{r={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]"),favorite:document.querySelector("[data-modal-favorite]")},!(!r.opener||!r.closer||!r.modal||!r.container||!r.favorite)&&(r.opener.addEventListener("click",e=>{if(e.preventDefault(),A(e.target,".modal-exercise-info")){const s=A(e.target,".card-item");if(s&&s.dataset){const a=s.dataset.id;if(!a)return;V(a)}}}),r.favorite.addEventListener("click",N),r.closer.addEventListener("click",S),document.addEventListener("keydown",function(e){r.modal.classList.contains("is-hidden")||e.key==="Escape"&&S()}),r.modal.addEventListener("click",function(e){e.target===r.modal&&S()}))};function R(e){let t=document.querySelector(".raiting-value");t.innerText=`${e.toFixed(1)}`}let j=H({starSize:24,element:document.querySelector("#rater"),rateCallback:function(t,s){R(t),this.setRating(t),s()}});function J(){document.querySelector(".raiting-form input").value="",document.querySelector(".raiting-form textarea").value="",j.clear()}function Q(e){try{L.addRateByExerciseId(I,{rate:j.getRating(),email:e.target[0].value,review:e.target[1].value})}catch(t){h.error({title:"Error",message:"Unable to send rate"}),console.log(t)}finally{R(0),J(),x()}}const Y=document.querySelector(".raiting-form");Y.addEventListener("submit",e=>{e.preventDefault();const t=!e.target[0].value,s=!e.target[1].value;if(t||s){h.error({title:"Error",message:"Email and comment fields should not be empty"});return}Q(e)});function x(){b.modal.classList.toggle("is-hidden"),r.modal.classList.toggle("is-hidden")}const G=e=>{I=e,b={openModalBtn:document.querySelector("[data-raiting-modal-open]"),closeModalBtn:document.querySelector("[data-raiting-modal-close]"),modal:document.querySelector("[data-raiting-modal]")},b.openModalBtn.dataset.id=e,b.openModalBtn.addEventListener("click",x),b.closeModalBtn.addEventListener("click",x)};window.addEventListener("load",()=>{W()});const Z=[{name:"Roman Onishchenko",linkedin:"https://www.linkedin.com/in/onishchenko-roman/",github:"https://github.com/orm81zp"},{name:"Antonina Sych",linkedin:"https://www.linkedin.com/in/antonina-sych/",github:"https://github.com/AntoninaSych"},{name:"Kryvko Sergii",linkedin:"dd",github:"https://github.com/KryvkoSergii"},{name:"Oleksii Aleksieiev",linkedin:"https://www.linkedin.com/in/oleksii-aleksieiev-37b1b9b4/",github:"https://github.com/Gloomcat"},{name:"Sergiy Kapustin",linkedin:"https://www.linkedin.com/in/sergiyka/",github:"https://github.com/sergiy-ka"},{name:"Vitalii Kletsko",linkedin:"https://www.linkedin.com/in/vitalii-kletsko-790b4690/",github:"https://github.com/vkletsko"},{name:"Volodymyr Plakhtyna",linkedin:"https://www.linkedin.com/in/volodymyr-plakhtyna-59173285/",github:"https://github.com/VolodymyrPlay"},{name:"Bogdan Onoiko",linkedin:"https://www.linkedin.com/in/bogdanonoyko/",github:"https://github.com/DanSport"},{name:"Oleg Usatui",linkedin:"https://www.linkedin.com/in/oleg-usatyi-57a83b274/",github:"https://github.com/OlegUsatui"}];(()=>{if(!document.querySelector("footer"))return;const t=document.querySelector(".team-btn-open"),s=document.querySelector(".team-btn-close"),a=document.querySelector(".team-list"),i=document.querySelector(".team-backdrop");t.addEventListener("click",o),s.addEventListener("click",m),a.addEventListener("click",c),i.addEventListener("click",g),a.insertAdjacentHTML("beforeend",z(Z));const n=[...a.children];function o(){i.classList.remove("hidden"),window.addEventListener("keydown",p),document.body.style.overflow="hidden"}function m(){i.classList.add("hidden"),window.removeEventListener("keydown",p),document.body.style.overflow="auto",v()}function v(){n.forEach(l=>{l.lastElementChild.classList.remove("active-devel"),l.firstElementChild.classList.remove("arrow-up")})}function p(l){l.code==="Escape"&&m()}function g(l){l.currentTarget===l.target&&m()}function c(l){const u=l.target.closest(".team-item");if(!u)return;const d=u.lastElementChild,y=u.querySelector(".more-icon"),M=document.querySelector(".active-devel");console.log(u.firstElementChild),M&&M.classList.remove("active-devel"),y.classList.add("arrow-up"),u.classList.add("active-devel"),d.style.maxHeight?(d.style.maxHeight=null,u.firstElementChild.classList.remove("arrow-up")):(d.style.maxHeight=d.scrollHeight+"px",y.classList.add("arrow-up"))}})();(()=>{const e=document.getElementById("quote-text"),t=document.getElementById("quote-author");if(!e&&!t)return;async function s(){try{const a=new Date().toLocaleDateString(),i=JSON.parse(localStorage.getItem("quoteData"));if(i&&i.date===a)return i.quote;const n=await L.getQuote(),o={date:a,quote:n};return localStorage.setItem("quoteData",JSON.stringify(o)),o.quote}catch{console.log("Error during  getting quote")}}s().then(a=>{e.innerText=a.quote,t.innerText=a.author})})();const q=document.querySelector(".scroll-up");let B=document.documentElement.scrollTop;q.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=_;window.onload=_;function _(){B=document.documentElement.scrollTop,B>100?q.style.display="flex":q.style.display="none"}window.addEventListener("scroll",function(){const e=document.querySelector("header");var t=e.offsetTop;window.scrollY>t?e.classList.add("fixed"):e.classList.remove("fixed")});export{L as A,k as L,P as U,ae as a,ie as b,te as c,A as g,se as r,ee as s};
//# sourceMappingURL=main-BnONzl2N.js.map
