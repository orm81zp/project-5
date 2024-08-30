import{a as C,i as v,g as b,r as j}from"./vendor-DvC1QdLM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const E=C.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class w{static async getExercises(e={}){const{page:a=1,limit:i=10}=e;return(await E.get("/exercises",{params:{page:a,limit:i,...e}})).data}static async addRateByExerciseId(e,a){return(await E.patch(`/exercises/${e}/rating`,a)).data}static async getExerciseById(e){return(await E.get(`/exercises/${e}`)).data}static async getFilters(e={}){const{page:a=1,limit:i=12}=e;return(await E.get("/filters",{params:{page:a,limit:i,...e}})).data}static async getQuote(){return(await E.get("/quote")).data}static async addSubscription(e){return(await E.post("/subscription",e)).data}}(()=>{if(!document.querySelector("footer"))return;const e=document.querySelector(".js-footer-form"),a=document.querySelector('input[type="email"]'),i=document.querySelector(".footer_form_btn");i.addEventListener("click",n);function s(o){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(o)}i.disabled=!0,a.addEventListener("input",()=>{const o=a.value;s(o)?(i.classList.add("active"),i.disabled=!1):(i.classList.remove("active"),i.disabled=!0)}),a.addEventListener("blur",()=>{const o=a.value;s(o)?i.classList.add("active"):v.error({title:"Error",message:"Invalid email address was entered."})});function n(o){o.preventDefault();const l=a.value;if(!s(l)){console.log("tyta"),v.error({title:"Error",message:"Invalid email address was entered."});return}const d={email:l};w.addSubscription(d).then(h=>{const y=h.data.message;v.success({title:"Success",message:y})}).catch(h=>{const y=h.response.data.message;h.response.status===409?v.warning({title:"Warning",message:"Subscription already exists"}):h.response.status===400&&v.warning({title:"Warning",message:y})}),e.reset()}document.querySelectorAll(".footer_soc_item").forEach(o=>{const l=o.querySelector(".footer_soc_icon");o.addEventListener("mouseenter",()=>{b.to(o,{keyframes:{"0%":{rotation:-5},"25%":{rotation:5},"50%":{rotation:-5},"75%":{rotation:5},"100%":{rotation:0}},duration:.5,repeat:1}),b.to(l,{keyframes:{"0%":{x:-3},"25%":{x:3},"50%":{x:-3},"75%":{x:3},"100%":{x:0}},duration:.2,repeat:3})}),o.addEventListener("mouseleave",()=>{b.to(o,{rotation:0,duration:.2}),b.to(l,{x:0,duration:.2})})});const u={root:null,rootMargin:"0px",threshold:0},p=document.querySelector(".footer_logo_icon"),m=document.querySelector(".footer_title_span");new IntersectionObserver(g,u).observe(p);function g(o,l){o.forEach(d=>{d.isIntersecting&&(b.to(p,{duration:2,opacity:1,x:0,rotationX:360}),b.to(m,{duration:2,opacity:1}))})}})();(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".menu-link"),s=document.querySelector(".mobile-menu-overlay"),n=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open")};e.addEventListener("click",n),a.addEventListener("click",n),i.forEach(c=>{c.addEventListener("click",n)}),s.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1))})})();const R=(t,e)=>t.closest(e),Y=(t,e=!1)=>{if(e){const a=t.querySelector(".loader");a&&a.remove()}else t.insertAdjacentHTML("beforeend",'<div class="loader"></div>')},G=t=>{if(Array.isArray(t))for(let e of t)e.innerHTML="";else t.innerHTML=""},X=(t,e)=>{const a=t.map(i=>`<li class="item"><a href="#">${i}</a></li>`).join("");e.insertAdjacentHTML("beforeend",a)},Z=(t,e)=>{const a=t.map(({filter:i,name:s,imgURL:n})=>`
      <li class="card-item">
        <a class="card-link" href="#">
          <img
            src="${n}"
            alt="${s}"
          />
          <div class="card-content" data-category="${s}">
            <div class="card-name">${s}</div>
            <div class="card-filter">${i}</div>
          </div>
        </a>
      </li>
      `).join("");e.insertAdjacentHTML("beforeend",a)},ee=(t,e,a=!1)=>{const i=t.map(({bodyPart:s,burnedCalories:n,gifUrl:c,name:u,rating:p,target:m,time:f,_id:g})=>{const o=a?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="../../img/icons.svg#icon-trash"></use>
              </svg>
            </a>`:`<div class="__rating">${p}</div>`;return`
      <li class="card-item" data-id="${g}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${o}
          </div>
          <div>
            <a class="__start" href="#" data-id="${g}">Start</a>
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
      `}).join("");e.insertAdjacentHTML("beforeend",i)},D=t=>{const e=Math.floor(t),a=(t-e)*100,i=(n,c="")=>`
    <li class="rating-item">
      <svg class="rating-star ${n}" width="18" height="18">
        <use href="./img/icons.svg#icon-star"></use>
        ${c}
      </svg>
    </li>`;let s="";for(let n=0;n<5;n++)n<e?s+=i("full"):n==e&&a>0?s+=i("partial",`<svg class="overlay" style="clip-path:inset(0 ${100-a}% 0 0);"><use href="./img/icons.svg#icon-star"></use></svg>`):s+=i("empty");return s},x=(t,e)=>{const a=`
      ${t?"Remove from favorites":"Add to favorites"}
        <svg class="favorite-icon" width="18" height="18">
          <use href="./img/icons.svg#${t?"icon-trash":"icon-heart"}"></use>
        </svg>`;e.innerHTML=a,t?e.classList.add("remove"):e.classList.remove("remove")},H=(t,e,a)=>{const{bodyPart:i,burnedCalories:s,description:n,equipment:c,gifUrl:u,name:p,popularity:m,rating:f,target:g,time:o,_id:l}=t,d=`
      <div class="gif-container">
        <img class="modal-gif" src="${u}" alt="${g}" width="360" height="360">
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="exercise-name capitalize">${p}</h3>
          <ul class="rating-stars">
            <li class="rating-item">
              <p class="rating-value">${f.toFixed(1)}</p>
            </li>
            ${D(f)}
          </ul>
        </div>
        <ul class="details">
          <li class="details-item">
            <h4 class="details-header">Target</h4>
            <p class="details-value capitalize">${g}</p>
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
      </div>`;a.innerHTML=d};function z(t){return t.map(e=>{const{name:a,linkedin:i,github:s}=e;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="../../img/icons.svg#icon-more"></use>
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
                    <use href="../../img/icons.svg#icon-linkedin"></use>
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
                    <use href="../../img/icons.svg#icon-github"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </li>
`}).join("")}const q="exercises";let r={},S={},O;const _=()=>{let t=localStorage.getItem(q);return t===null?[]:JSON.parse(t)},k=t=>{const e=_();return e?e.includes(t):!1},P=()=>{const t=r.favorite.dataset.id;if(!t)return;let e=_();if(!e){localStorage.setItem(q,JSON.stringify([t])),x(k(t),r.favorite);return}k(t)?e.splice(e.indexOf(t),1):e.push(t),localStorage.setItem(q,JSON.stringify(e)),x(k(t),r.favorite)},K=async t=>{try{r.container.innerHTML="";const e=await w.getExerciseById(t),a=k(t);H(e,a,r.container),x(a,r.favorite),r.favorite.dataset.id=t,r.modal.classList.toggle("is-hidden"),U(t)}catch(e){v.error({title:"Error",message:`${e}`});return}},L=()=>{r.modal.classList.toggle("is-hidden")},F=()=>{r={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]"),favorite:document.querySelector("[data-modal-favorite]")},!(!r.opener||!r.closer||!r.modal||!r.container||!r.favorite)&&(r.opener.addEventListener("click",t=>{const e=t.target.className;if(e&&e.includes("__start")){t.preventDefault();const i=R(t.target,".card-item");if(i&&i.dataset){const s=i.dataset.id;if(!s)return;K(s)}}}),r.favorite.addEventListener("click",P),r.closer.addEventListener("click",L),document.addEventListener("keydown",function(t){r.modal.classList.contains("is-hidden")||t.key==="Escape"&&L()}),r.modal.addEventListener("click",function(t){t.target===r.modal&&L()}))};function B(t){let e=document.querySelector(".raiting-value");e.innerText=`${t.toFixed(1)}`}let A=j({starSize:24,element:document.querySelector("#rater"),rateCallback:function(e,a){B(e),this.setRating(e),a()}});function N(){document.querySelector(".raiting-form input").value="",document.querySelector(".raiting-form textarea").value="",A.clear()}function W(t){try{w.addRateByExerciseId(O,{rate:A.getRating(),email:t.target[0].value,review:t.target[1].value})}catch(e){v.error({title:"Error",message:"Unable to send rate"}),console.log(e)}finally{B(0),N(),$()}}const V=document.querySelector(".raiting-form");V.addEventListener("submit",t=>{t.preventDefault();const e=!t.target[0].value,a=!t.target[1].value;if(e||a){v.error({title:"Error",message:"Email and comment fields should not be empty"});return}W(t)});function $(){S.modal.classList.toggle("is-hidden"),r.modal.classList.toggle("is-hidden")}const U=t=>{O=t,S={openModalBtn:document.querySelector("[data-raiting-modal-open]"),closeModalBtn:document.querySelector("[data-raiting-modal-close]"),modal:document.querySelector("[data-raiting-modal]")},S.openModalBtn.dataset.id=t,S.openModalBtn.addEventListener("click",$),S.closeModalBtn.addEventListener("click",$)};window.addEventListener("load",()=>{F()});(()=>{const t=document.getElementById("quote-text"),e=document.getElementById("quote-author");if(!t&&!e)return;async function a(){try{const i=new Date().toLocaleDateString(),s=JSON.parse(localStorage.getItem("quoteData"));if(s&&s.date===i)return s.quote;const n=await w.getQuote(),c={date:i,quote:n};return localStorage.setItem("quoteData",JSON.stringify(c)),c.quote}catch{console.log("Error during  getting quote")}}a().then(i=>{t.innerText=i.quote,e.innerText=i.author})})();const T=document.querySelector(".scroll-up");let M=document.documentElement.scrollTop;T.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=I;window.onload=I;function I(){M=document.documentElement.scrollTop,M>100?T.style.display="flex":T.style.display="none"}const J=[{name:"Roman Onishchenko",linkedin:"https://www.linkedin.com/in/onishchenko-roman/",github:"https://github.com/orm81zp"},{name:"Antonina Sych",linkedin:"https://www.linkedin.com/in/antonina-sych/",github:"https://github.com/AntoninaSych"},{name:"Kryvko Sergii",linkedin:"dd",github:"https://github.com/KryvkoSergii"},{name:"Oleksii Aleksieiev",linkedin:"https://www.linkedin.com/in/oleksii-aleksieiev-37b1b9b4/",github:"https://github.com/Gloomcat"},{name:"Sergiy Kapustin",linkedin:"https://www.linkedin.com/in/sergiyka/",github:"https://github.com/sergiy-ka"},{name:"Vitalii Kletsko",linkedin:"https://www.linkedin.com/in/vitalii-kletsko-790b4690/",github:"https://github.com/vkletsko"},{name:"Volodymyr Plakhtyna",linkedin:"https://www.linkedin.com/in/volodymyr-plakhtyna-59173285/",github:"https://github.com/VolodymyrPlay"},{name:"Bogdan Onoiko",linkedin:"https://www.linkedin.com/in/bogdanonoyko/",github:"https://github.com/DanSport"},{name:"Oleg Usatui",linkedin:"https://www.linkedin.com/in/oleg-usatyi-57a83b274/",github:"https://github.com/OlegUsatui"}];(()=>{if(!document.querySelector("footer"))return;const e=document.querySelector(".team-btn-open"),a=document.querySelector(".team-btn-close"),i=document.querySelector(".team-list"),s=document.querySelector(".team-backdrop");e.addEventListener("click",c),a.addEventListener("click",u),i.addEventListener("click",g),s.addEventListener("click",f),i.insertAdjacentHTML("beforeend",z(J));const n=[...i.children];function c(){s.classList.remove("hidden"),window.addEventListener("keydown",m),document.body.style.overflow="hidden"}function u(){s.classList.add("hidden"),window.removeEventListener("keydown",m),document.body.style.overflow="auto",p()}function p(){n.forEach(o=>{o.lastElementChild.classList.remove("active-devel"),o.firstElementChild.classList.remove("arrow-up")})}function m(o){o.code==="Escape"&&u()}function f(o){o.currentTarget===o.target&&u()}function g(o){const l=o.target.closest(".team-item");if(!l)return;const d=l.lastElementChild,h=l.querySelector(".more-icon"),y=document.querySelector(".active-devel");console.log(l.firstElementChild),y&&y.classList.remove("active-devel"),h.classList.add("arrow-up"),l.classList.add("active-devel"),d.style.maxHeight?(d.style.maxHeight=null,l.firstElementChild.classList.remove("arrow-up")):(d.style.maxHeight=d.scrollHeight+"px",h.classList.add("arrow-up"))}})();export{w as A,q as L,Z as a,ee as b,G as c,R as g,X as r,Y as s};
//# sourceMappingURL=main-BzeCBHeE.js.map
