import{a as K,i as f,g as C,r as F}from"./vendor-DvC1QdLM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const k=K.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class S{static async getExercises(t={}){const{page:s=1,limit:a=10}=t;return(await k.get("/exercises",{params:{page:s,limit:a,...t}})).data}static async addRateByExerciseId(t,s){return(await k.patch(`/exercises/${t}/rating`,s)).data}static async getExerciseById(t){return(await k.get(`/exercises/${t}`)).data}static async getFilters(t={}){const{page:s=1,limit:a=12}=t;return(await k.get("/filters",{params:{page:s,limit:a,...t}})).data}static async getQuote(){return(await k.get("/quote")).data}static async addSubscription(t){return(await k.post("/subscription",t)).data}}const I=(e,t)=>e.closest(t),ae=(e,t=!1)=>{if(t){const s=e.querySelector(".loader");s&&s.remove()}else e.insertAdjacentHTML("beforeend",'<div class="loader"></div>')},ie=e=>{if(Array.isArray(e))for(let t of e)t.innerHTML="";else e.innerHTML=""};function L(e){return/^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/.test(e)}const v="/project-5/assets/icons-C2d4C28r.svg",U=e=>e%1?`${Math.round(e*10)/10}`:`${e}.0`,ne=(e,t)=>{const s=e.map(a=>`<li class="item"><a class="filter-link" href="#">${a}</a></li>`).join("");t.insertAdjacentHTML("beforeend",s)},oe=(e,t)=>{const s=e.map(({filter:a,name:i,imgURL:n})=>`
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
      `).join("");t.insertAdjacentHTML("beforeend",s)},re=(e,t,s=!1)=>{const a=e.map(({bodyPart:i,burnedCalories:n,gifUrl:o,name:p,rating:y,target:g,time:c,_id:m})=>{const l=s?`<a class="trash-link" href="#" title="Remove">
              <svg class="icon-trash" width="16" height="16">
                <use href="${v}#icon-trash"></use>
              </svg>
            </a>`:`<div class="exercises-ratio">
              <p class="ratio-value">${U(y)}</p>
              <svg class="icon-star ratio-star" width="20" height="20">
                <use href="${v}#icon-star"></use>
                </svg>
            </div>`;return`
      <li class="card-item" data-id="${m}">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            ${l}
          </div>
          <button class="modal-exercise-info" type="button" data-id="${m}">
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
              <span class="item-name">Burned calories:</span><span class="item-value" title="${n} / ${c} min">${n} / ${c} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${i}">${i}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${g}">${g}</span>
            </li>
          </ul>
        </div>
      </li>
      `}).join("");t.insertAdjacentHTML("beforeend",a)},z=e=>{const t=Math.floor(e),s=(e-t)*100,a=(n,o="")=>`
    <li class="rating-item">
      <svg class="rating-star ${n}" width="18" height="18">
        <use href="${v}#icon-star"></use>
        ${o}
      </svg>
    </li>`;let i="";for(let n=0;n<5;n++)n<t?i+=a("full"):n==t&&s>0?i+=a("partial",`<svg class="overlay" style="clip-path:inset(0 ${100-s}% 0 0);"><use href="${v}#icon-star"></use></svg>`):i+=a("empty");return i},x=(e,t)=>{const s=`
      ${e?"Remove from favorites":"Add to favorites"}
        <svg class="favorite-icon" width="18" height="18">
          <use href="${v}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>`;t.innerHTML=s,e?t.classList.add("remove"):t.classList.remove("remove")},N=(e,t,s)=>{const{bodyPart:a,burnedCalories:i,description:n,equipment:o,gifUrl:p,name:y,popularity:g,rating:c,target:m,time:l,_id:d}=e,u=`
      <div class="gif-container">
        <img class="modal-gif" src="${p}" alt="${m}" width="360" height="360">
      </div>
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="exercise-name capitalize">${y}</h3>
          <ul class="rating-stars">
            <li class="rating-item">
              <p class="rating-value">${c.toFixed(1)}</p>
            </li>
            ${z(c)}
          </ul>
        </div>
        <ul class="details">
          <li class="details-item">
            <h4 class="details-header">Target</h4>
            <p class="details-value capitalize">${m}</p>
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
            <p class="details-value">${i}/${l} min</p>
          </li>
        </ul>
        <p class="description">${n}</p>
      </div>`;s.innerHTML=u};function V(e){return e.map(t=>{const{name:s,linkedin:a,github:i}=t;return` <li class="team-item">
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
                  href="${i}"
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
`}).join("")}const le=(e,t,s)=>{let a="";e.innerHTML="";const i=3;if(s>1){a+='<li class="list-item list-item-action go-to-start" data-page="1"><a class="page-link" href="#"><<</a></li>';let n=s-i;n<1&&(n=1),a+=`<li class="list-item list-item-action go-to-prev" data-page="${n}"><a class="page-link" href="#"><</a></li>`}if(s-1>=1&&(a+=`<li class="list-item" data-page="${s-1}"><a class="page-link" href="#">${s-1}</a></li>`),a+=`<li class="list-item active" data-page="${s}"><a class="page-link" href="#">${s}</a></li>`,s+1<=t&&(a+=`<li class="list-item" data-page="${s+1}"><a class="page-link" href="#">${s+1}</a></li>`),s===1&&s+2<=t&&(a+=`<li class="list-item" data-page="${s+2}"><a class="page-link" href="#">${s+2}</a></li>`),s<t){let n=s+i;n>t&&(n=t),a+=`<li class="list-item list-item-action go-to-next" data-page="${n}"><a class="page-link" href="#">></a></li>`,a+=`<li class="list-item list-item-action go-to-end" data-page="${t}"><a class="page-link" href="#">>></a></li>`}e.insertAdjacentHTML("beforeend",a)};(()=>{if(!document.querySelector("footer"))return;const t=document.querySelector(".js-footer-form"),s=document.querySelector('input[type="email"]'),a=document.querySelector(".footer_form_btn");a.addEventListener("click",i),a.disabled=!0,s.addEventListener("input",()=>{const c=s.value;L(c)?(a.classList.add("active"),a.disabled=!1,s.classList.add("active")):(a.classList.remove("active"),a.disabled=!0,s.classList.remove("active"))}),s.addEventListener("blur",()=>{const c=s.value;c!==""&&(L(c)?a.classList.add("active"):f.error({title:"Error",message:"Invalid email address was entered."}))});function i(c){c.preventDefault();const m=s.value;if(!L(m)){f.error({title:"Error",message:"Invalid email address was entered."});return}const l={email:m};S.addSubscription(l).then(d=>{const u=d.message;f.success({title:"Success",message:u}),a.disabled=!0,s.classList.remove("active"),a.classList.remove("active")}).catch(d=>{var u;d.response.status===409?f.warning({title:"Warning",message:"Subscription already exists"}):d.response.status===400?f.warning({title:"Warning",message:((u=d.response.data)==null?void 0:u.message)||"An error occurred"}):f.error({title:"Error",message:"An unexpected error occurred. Please try again later."})}),t.reset()}const n={root:null,rootMargin:"0px",threshold:0},o=document.querySelector(".footer_logo_icon"),p=document.querySelector(".footer_title_span");new IntersectionObserver(g,n).observe(o);function g(c,m){c.forEach(l=>{l.isIntersecting&&(C.to(o,{duration:2,opacity:1,x:0,rotationX:360}),C.to(p,{duration:2,opacity:1}))})}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),a=document.querySelectorAll(".menu-link"),i=document.querySelector(".mobile-menu-overlay"),n=()=>{const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open")};t.addEventListener("click",n),s.addEventListener("click",n),a.forEach(o=>{o.addEventListener("click",n)}),i.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))})})();const q="exercises",W="storageUpdateCustomEvent";let r={},h={},_;const M=()=>JSON.parse(localStorage.getItem(q))||[],b=e=>{const t=M();return t?t.includes(e):!1},j=()=>{document.dispatchEvent(new CustomEvent(W,{detail:M()}))},J=()=>{const e=r.favorite.dataset.id;if(!e)return;let t=M();if(!t){localStorage.setItem(q,JSON.stringify([e])),x(b(e),r.favorite),j();return}b(e)?t.splice(t.indexOf(e),1):t.push(e),localStorage.setItem(q,JSON.stringify(t)),x(b(e),r.favorite),j()},Q=async e=>{try{r.container.innerHTML="";const t=await S.getExerciseById(e),s=b(e);N(t,s,r.container),x(s,r.favorite),r.favorite.dataset.id=e,r.modal.classList.toggle("is-hidden"),ee(e)}catch(t){f.error({title:"Error",message:`${t}`});return}},$=()=>{r.modal.classList.toggle("is-hidden")},Y=()=>{r={opener:document.querySelector("[data-modal-open]"),closer:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),container:document.querySelector("[data-modal-content]"),favorite:document.querySelector("[data-modal-favorite]")},!(!r.opener||!r.closer||!r.modal||!r.container||!r.favorite)&&(r.opener.addEventListener("click",e=>{if(e.preventDefault(),I(e.target,".modal-exercise-info")){const s=I(e.target,".card-item");if(s&&s.dataset){const a=s.dataset.id;if(!a)return;Q(a)}}}),r.favorite.addEventListener("click",J),r.closer.addEventListener("click",$),document.addEventListener("keydown",function(e){r.modal.classList.contains("is-hidden")||e.key==="Escape"&&$()}),r.modal.addEventListener("click",function(e){e.target===r.modal&&$()}))};function D(e){let t=document.querySelector(".rater-value");t.innerText=`${e.toFixed(1)}`}let A=F({starSize:20,element:document.querySelector("#rater"),rateCallback:function(t,s){D(t),this.setRating(t),s()}});function G(){document.querySelector(".rating-form input").value="",document.querySelector(".rating-form textarea").value="",A.clear()}function Z(e){return"response"in e&&"data"in e.response&&"message"in e.response.data}const P=async e=>{try{await S.addRateByExerciseId(_,{rate:A.getRating(),email:e.target[0].value,review:e.target[1].value})}catch(t){f.error({title:"Error",message:Z(t)?t.response.data.message:"Unable to send rate"}),console.log(t)}finally{w()}},X=document.querySelector(".rating-form");X.addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector(".rating-form input").value;if(!L(t)){f.error({title:"Error",message:"Invalid email address was entered."});return}P(e)});function w(){h.modal.classList.toggle("is-hidden"),r.modal.classList.toggle("is-hidden"),h.modal.classList.contains("is-hidden")&&(D(0),G())}const E=e=>{const t=!document.querySelector(".rating-form input").value,s=!document.querySelector(".rating-form textarea").value,a=!A.getRating(),i=document.querySelector(".rating-form button");i.disabled=a||t||s},ee=e=>{_=e,h={openModalBtn:document.querySelector("[data-rating-modal-open]"),closeModalBtn:document.querySelector("[data-rating-modal-close]"),modal:document.querySelector("[data-rating-modal]")},h.openModalBtn.dataset.id=e,h.openModalBtn.removeEventListener("click",w),h.closeModalBtn.removeEventListener("click",w),h.openModalBtn.addEventListener("click",w),h.closeModalBtn.addEventListener("click",w),document.querySelector(".rating-form input").removeEventListener("keyup",E),document.querySelector(".rating-form textarea").removeEventListener("keyup",E),document.getElementById("rater").removeEventListener("click",E),document.querySelector(".rating-form input").addEventListener("keyup",E),document.querySelector(".rating-form textarea").addEventListener("keyup",E),document.getElementById("rater").addEventListener("click",E)};window.addEventListener("load",()=>{Y()});const te=[{name:"Roman Onishchenko",linkedin:"https://www.linkedin.com/in/onishchenko-roman/",github:"https://github.com/orm81zp"},{name:"Antonina Sych",linkedin:"https://www.linkedin.com/in/antonina-sych/",github:"https://github.com/AntoninaSych"},{name:"Kryvko Sergii",linkedin:"https://www.linkedin.com/in/sergii-kryvko",github:"https://github.com/KryvkoSergii"},{name:"Oleksii Aleksieiev",linkedin:"https://www.linkedin.com/in/oleksii-aleksieiev-37b1b9b4/",github:"https://github.com/Gloomcat"},{name:"Sergiy Kapustin",linkedin:"https://www.linkedin.com/in/sergiyka/",github:"https://github.com/sergiy-ka"},{name:"Vitalii Kletsko",linkedin:"https://www.linkedin.com/in/vitalii-kletsko-790b4690/",github:"https://github.com/vkletsko"},{name:"Volodymyr Plakhtyna",linkedin:"https://www.linkedin.com/in/volodymyr-plakhtyna-59173285/",github:"https://github.com/VolodymyrPlay"},{name:"Bogdan Onoiko",linkedin:"https://www.linkedin.com/in/bogdanonoyko/",github:"https://github.com/DanSport"},{name:"Oleg Usatui",linkedin:"https://www.linkedin.com/in/oleg-usatyi-57a83b274/",github:"https://github.com/OlegUsatui"}];(()=>{if(!document.querySelector("footer"))return;const t=document.querySelector(".team-btn-open"),s=document.querySelector(".team-btn-close"),a=document.querySelector(".team-list"),i=document.querySelector(".team-backdrop");t.addEventListener("click",o),s.addEventListener("click",p),a.addEventListener("click",m),i.addEventListener("click",c),a.insertAdjacentHTML("beforeend",V(te));const n=[...a.children];function o(){i.classList.remove("hidden"),window.addEventListener("keydown",g),document.body.style.overflow="hidden"}function p(){i.classList.add("hidden"),window.removeEventListener("keydown",g),document.body.style.overflow="auto",y()}function y(){n.forEach(l=>{l.lastElementChild.classList.remove("active-devel"),l.firstElementChild.classList.remove("arrow-up")})}function g(l){l.code==="Escape"&&p()}function c(l){l.currentTarget===l.target&&p()}function m(l){const d=l.target.closest(".team-item");if(!d)return;const u=d.lastElementChild,O=d.querySelector(".more-icon"),B=document.querySelector(".active-devel");console.log(d.firstElementChild),B&&B.classList.remove("active-devel"),O.classList.add("arrow-up"),d.classList.add("active-devel"),u.style.maxHeight?(u.style.maxHeight=null,d.firstElementChild.classList.remove("arrow-up")):(u.style.maxHeight=u.scrollHeight+"px",O.classList.add("arrow-up"))}})();(()=>{const e=document.getElementById("quote-text"),t=document.getElementById("quote-author");if(!e&&!t)return;async function s(){try{const a=new Date().toLocaleDateString(),i=JSON.parse(localStorage.getItem("quoteData"));if(i&&i.date===a)return i.quote;const n=await S.getQuote(),o={date:a,quote:n};return localStorage.setItem("quoteData",JSON.stringify(o)),o.quote}catch{console.log("Error during  getting quote")}}s().then(a=>{e.innerText=a.quote,t.innerText=a.author})})();const T=document.querySelector(".scroll-up");let R=document.documentElement.scrollTop;T.addEventListener("click",()=>{document.documentElement.scrollTop=0});window.onscroll=H;window.onload=H;function H(){R=document.documentElement.scrollTop,R>100?T.style.display="flex":T.style.display="none"}window.addEventListener("scroll",function(){const e=document.querySelector("header");var t=e.offsetTop;window.scrollY>t?e.classList.add("fixed"):e.classList.remove("fixed")});export{S as A,q as L,W as U,oe as a,le as b,re as c,ie as d,I as g,ne as r,ae as s};
//# sourceMappingURL=main-DgNj_paR.js.map
