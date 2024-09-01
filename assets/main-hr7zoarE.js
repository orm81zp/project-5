import{a as P,i as h,g as A,r as K}from"./vendor-DvC1QdLM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const E=P.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class b{static async getExercises(t={}){const{page:s=1,limit:a=10}=t;return(await E.get("/exercises",{params:{page:s,limit:a,...t}})).data}static async addRateByExerciseId(t,s){return(await E.patch(`/exercises/${t}/rating`,s)).data}static async getExerciseById(t){return(await E.get(`/exercises/${t}`)).data}static async getFilters(t={}){const{page:s=1,limit:a=12}=t;return(await E.get("/filters",{params:{page:s,limit:a,...t}})).data}static async getQuote(){return(await E.get("/quote")).data}static async addSubscription(t){return(await E.post("/subscription",t)).data}}const I=(e,t)=>e.closest(t),ae=(e,t=!1)=>{if(t){const s=e.querySelector(".loader");s&&s.remove()}else e.insertAdjacentHTML("beforeend",'<div class="loader"></div>')},ne=e=>{if(Array.isArray(e))for(let t of e)t.innerHTML="";else e.innerHTML=""};function k(e){return/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/.test(e)}const v="/project-5/assets/icons-C2d4C28r.svg",F=e=>e%1?`${Math.round(e*10)/10}`:`${e}.0`,ie=(e,t)=>{const s=e.map(a=>`<li class="item"><a class="filter-link" href="#">${a}</a></li>`).join("");t.insertAdjacentHTML("beforeend",s)},oe=(e,t)=>{const s=e.map(({filter:a,name:n,imgURL:i})=>`
      <li class="card-item" data-exercise="${n}">
        <a class="card-link" href="#">
          <img
            src="${i}"
            alt="${n}"
          />
          <div class="card-content">
            <div class="card-name">${n}</div>
            <div class="card-filter">${a}</div>
          </div>
        </a>
      </li>
      `).join("");t.insertAdjacentHTML("beforeend",s)},re=(e,t,s=!1)=>{const a=e.map(({bodyPart:n,burnedCalories:i,gifUrl:o,name:p,rating:y,target:g,time:l,_id:u})=>{const c=s?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="${v}#icon-trash"></use>
              </svg>
            </a>`:`<div class="exercises-ratio">
              <p class="ratio-value">${F(y)}</p>
              <svg class="icon-star ratio-star" width="20" height="20">
                <use href="${v}#icon-star"></use>
                </svg>
            </div>`;return`
      <li class="card-item" data-id="${u}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${c}
          </div>
          <button class="modal-exercise-info" type="button" data-id="${u}">
            <span>Start</span>
            <svg class="icon-arrow-right icon-arrow" width="12" height="12">
              <use href="${v}#icon-arrow-right"></use>
            </svg>
          </button>
        </div>
        <div class="card-content">
          <img
            src="${o}"
            alt="${g}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${p}">${p}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${i} / ${l} min">${i} / ${l} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${n}">${n}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${g}">${g}</span>
            </li>
          </ul>
        </div>
      </li>
      `}).join("");t.insertAdjacentHTML("beforeend",a)},U=e=>{const t=Math.floor(e),s=(e-t)*100,a=(i,o="")=>`
    <li class="rating-item">
      <svg class="rating-star ${i}" width="18" height="18">
        <use href="${v}#icon-star"></use>
        ${o}
      </svg>
    </li>`;let n="";for(let i=0;i<5;i++)i<t?n+=a("full"):i==t&&s>0?n+=a("partial",`<svg class="overlay" style="clip-path:inset(0 ${100-s}% 0 0);"><use href="${v}#icon-star"></use></svg>`):n+=a("empty");return n},$=(e,t)=>{const s=`
      ${e?"Remove from favorites":"Add to favorites"}
        <svg class="favorite-icon" width="18" height="18">
          <use href="${v}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>`;t.innerHTML=s,e?t.classList.add("remove"):t.classList.remove("remove")},z=(e,t,s)=>{const{bodyPart:a,burnedCalories:n,description:i,equipment:o,gifUrl:p,name:y,popularity:g,rating:l,target:u,time:c,_id:d}=e,m=`
      <div class="gif-container">
        <img class="modal-gif" src="${p}" alt="${u}" width="360" height="360">
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="exercise-name capitalize">${y}</h3>
          <ul class="rating-stars">
            <li class="rating-item">
              <p class="rating-value">${l.toFixed(1)}</p>
            </li>
            ${U(l)}
          </ul>
        </div>
        <ul class="details">
          <li class="details-item">
            <h4 class="details-header">Target</h4>
            <p class="details-value capitalize">${u}</p>
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
            <p class="details-value">${g}</p>
          </li>
          <li class="details-item">
            <h4 class="details-header">Burned Calories</h4>
            <p class="details-value">${n}/${c} min</p>
          </li>
        </ul>
        <p class="description">${i}</p>
      </div>`;s.innerHTML=m};function N(e){return e.map(t=>{const{name:s,linkedin:a,github:n}=t;return` <li class="team-item">
          <svg class="more-icon" width="20" height="20">
            <use href="${v}#icon-more"></use>
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
                    <use href="${v}#icon-linkedin"></use>
                  </svg>
                </a>
              </li>
              <li class="team-soc-item">
                <a
                  href="${n}"
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
`}).join("")}(()=>{if(!document.querySelector("footer"))return;const t=document.querySelector(".js-footer-form"),s=document.querySelector('input[type="email"]'),a=document.querySelector(".footer_form_btn");a.addEventListener("click",n),a.disabled=!0,s.addEventListener("input",()=>{const l=s.value;k(l)?(a.classList.add("active"),a.disabled=!1,s.classList.add("active")):(a.classList.remove("active"),a.disabled=!0,s.classList.remove("active"))}),s.addEventListener("blur",()=>{const l=s.value;l!==""&&(k(l)?a.classList.add("active"):h.error({title:"Error",message:"Invalid email address was entered."}))});function n(l){l.preventDefault();const u=s.value;if(!k(u)){h.error({title:"Error",message:"Invalid email address was entered."});return}const c={email:u};b.addSubscription(c).then(d=>{const m=d.message;h.success({title:"Success",message:m}),a.disabled=!0,s.classList.remove("active"),a.classList.remove("active")}).catch(d=>{const m=d.response.message;d.response.status===409?h.warning({title:"Warning",message:"Subscription already exists"}):d.response.status===400&&h.warning({title:"Warning",message:m})}),t.reset()}const i={root:null,rootMargin:"0px",threshold:0},o=document.querySelector(".footer_logo_icon"),p=document.querySelector(".footer_title_span");new IntersectionObserver(g,i).observe(o);function g(l,u){l.forEach(c=>{c.isIntersecting&&(A.to(o,{duration:2,opacity:1,x:0,rotationX:360}),A.to(p,{duration:2,opacity:1}))})}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".menu-link"),n=document.querySelector(".mobile-menu-overlay"),i=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")};t.addEventListener("click",i),s.addEventListener("click",i),a.forEach(o=>{o.addEventListener("click",i)}),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();const x="exercises",V="storageUpdateCustomEvent";let r={},f={},_;const M=()=>JSON.parse(localStorage.getItem(x))||[],S=e=>{const t=M();return t?t.includes(e):!1},R=()=>{document.dispatchEvent(new CustomEvent(V,{detail:M()}))},W=()=>{const e=r.favorite.dataset.id;if(!e)return;let t=M();if(!t){localStorage.setItem(x,JSON.stringify([e])),$(S(e),r.favorite),R();return}S(e)?t.splice(t.indexOf(e),1):t.push(e),localStorage.setItem(x,JSON.stringify(t)),$(S(e),r.favorite),R()},J=async e=>{try{r.container.innerHTML="";const t=await b.getExerciseById(e),s=S(e);z(t,s,r.container),$(s,r.favorite),r.favorite.dataset.id=e,r.modal.classList.toggle("is-hidden"),ee(e)}catch(t){h.error({title:"Error",message:`${t}`});return}},q=()=>{r.modal.classList.toggle("is-hidden")},Q=()=>{r={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]"),favorite:document.querySelector("[data-modal-favorite]")},!(!r.opener||!r.closer||!r.modal||!r.container||!r.favorite)&&(r.opener.addEventListener("click",e=>{if(e.preventDefault(),I(e.target,".modal-exercise-info")){const s=I(e.target,".card-item");if(s&&s.dataset){const a=s.dataset.id;if(!a)return;J(a)}}}),r.favorite.addEventListener("click",W),r.closer.addEventListener("click",q),document.addEventListener("keydown",function(e){r.modal.classList.contains("is-hidden")||e.key==="Escape"&&q()}),r.modal.addEventListener("click",function(e){e.target===r.modal&&q()}))};function D(e){let t=document.querySelector(".rater-value");t.innerText=`${e.toFixed(1)}`}let O=K({starSize:20,element:document.querySelector("#rater"),rateCallback:function(t,s){D(t),this.setRating(t),s()}});function Y(){document.querySelector(".rating-form input").value="",document.querySelector(".rating-form textarea").value="",O.clear()}function G(e){return"response"in e&&"data"in e.response&&"message"in e.response.data}const Z=async e=>{try{await b.addRateByExerciseId(_,{rate:O.getRating(),email:e.target[0].value,review:e.target[1].value})}catch(t){h.error({title:"Error",message:G(t)?t.response.data.message:"Unable to send rate"}),console.log(t)}finally{L()}},X=document.querySelector(".rating-form");X.addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector(".rating-form input").value;if(!k(t)){h.error({title:"Error",message:"Invalid email address was entered."});return}Z(e)});function L(){f.modal.classList.toggle("is-hidden"),r.modal.classList.toggle("is-hidden"),f.modal.classList.contains("is-hidden")&&(D(0),Y())}const w=e=>{const t=!document.querySelector(".rating-form input").value,s=!document.querySelector(".rating-form textarea").value,a=!O.getRating(),n=document.querySelector(".rating-form button");n.disabled=a||t||s},ee=e=>{_=e,f={openModalBtn:document.querySelector("[data-rating-modal-open]"),closeModalBtn:document.querySelector("[data-rating-modal-close]"),modal:document.querySelector("[data-rating-modal]")},f.openModalBtn.dataset.id=e,f.openModalBtn.removeEventListener("click",L),f.closeModalBtn.removeEventListener("click",L),f.openModalBtn.addEventListener("click",L),f.closeModalBtn.addEventListener("click",L),document.querySelector(".rating-form input").removeEventListener("keyup",w),document.querySelector(".rating-form textarea").removeEventListener("keyup",w),document.getElementById("rater").removeEventListener("click",w),document.querySelector(".rating-form input").addEventListener("keyup",w),document.querySelector(".rating-form textarea").addEventListener("keyup",w),document.getElementById("rater").addEventListener("click",w)};window.addEventListener("load",()=>{Q()});const te=[{name:"Roman Onishchenko",linkedin:"https://www.linkedin.com/in/onishchenko-roman/",github:"https://github.com/orm81zp"},{name:"Antonina Sych",linkedin:"https://www.linkedin.com/in/antonina-sych/",github:"https://github.com/AntoninaSych"},{name:"Kryvko Sergii",linkedin:"https://www.linkedin.com/in/sergii-kryvko",github:"https://github.com/KryvkoSergii"},{name:"Oleksii Aleksieiev",linkedin:"https://www.linkedin.com/in/oleksii-aleksieiev-37b1b9b4/",github:"https://github.com/Gloomcat"},{name:"Sergiy Kapustin",linkedin:"https://www.linkedin.com/in/sergiyka/",github:"https://github.com/sergiy-ka"},{name:"Vitalii Kletsko",linkedin:"https://www.linkedin.com/in/vitalii-kletsko-790b4690/",github:"https://github.com/vkletsko"},{name:"Volodymyr Plakhtyna",linkedin:"https://www.linkedin.com/in/volodymyr-plakhtyna-59173285/",github:"https://github.com/VolodymyrPlay"},{name:"Bogdan Onoiko",linkedin:"https://www.linkedin.com/in/bogdanonoyko/",github:"https://github.com/DanSport"},{name:"Oleg Usatui",linkedin:"https://www.linkedin.com/in/oleg-usatyi-57a83b274/",github:"https://github.com/OlegUsatui"}];(()=>{if(!document.querySelector("footer"))return;const t=document.querySelector(".team-btn-open"),s=document.querySelector(".team-btn-close"),a=document.querySelector(".team-list"),n=document.querySelector(".team-backdrop");t.addEventListener("click",o),s.addEventListener("click",p),a.addEventListener("click",u),n.addEventListener("click",l),a.insertAdjacentHTML("beforeend",N(te));const i=[...a.children];function o(){n.classList.remove("hidden"),window.addEventListener("keydown",g),document.body.style.overflow="hidden"}function p(){n.classList.add("hidden"),window.removeEventListener("keydown",g),document.body.style.overflow="auto",y()}function y(){i.forEach(c=>{c.lastElementChild.classList.remove("active-devel"),c.firstElementChild.classList.remove("arrow-up")})}function g(c){c.code==="Escape"&&p()}function l(c){c.currentTarget===c.target&&p()}function u(c){const d=c.target.closest(".team-item");if(!d)return;const m=d.lastElementChild,B=d.querySelector(".more-icon"),C=document.querySelector(".active-devel");console.log(d.firstElementChild),C&&C.classList.remove("active-devel"),B.classList.add("arrow-up"),d.classList.add("active-devel"),m.style.maxHeight?(m.style.maxHeight=null,d.firstElementChild.classList.remove("arrow-up")):(m.style.maxHeight=m.scrollHeight+"px",B.classList.add("arrow-up"))}})();(()=>{const e=document.getElementById("quote-text"),t=document.getElementById("quote-author");if(!e&&!t)return;async function s(){try{const a=new Date().toLocaleDateString(),n=JSON.parse(localStorage.getItem("quoteData"));if(n&&n.date===a)return n.quote;const i=await b.getQuote(),o={date:a,quote:i};return localStorage.setItem("quoteData",JSON.stringify(o)),o.quote}catch{console.log("Error during  getting quote")}}s().then(a=>{e.innerText=a.quote,t.innerText=a.author})})();const T=document.querySelector(".scroll-up");let j=document.documentElement.scrollTop;T.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=H;window.onload=H;function H(){j=document.documentElement.scrollTop,j>100?T.style.display="flex":T.style.display="none"}window.addEventListener("scroll",function(){const e=document.querySelector("header");var t=e.offsetTop;window.scrollY>t?e.classList.add("fixed"):e.classList.remove("fixed")});export{b as A,x as L,V as U,oe as a,re as b,ne as c,I as g,ie as r,ae as s};
//# sourceMappingURL=main-hr7zoarE.js.map
