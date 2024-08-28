import"./assets/main-CNeT7qKl.js";import{a as M}from"./assets/vendor-CR7N1gwd.js";const p=M.create({baseURL:"https://your-energy.b.goit.study/api",headers:{Accept:"application/json"}});class B{static async getExercises(s={}){const{page:r=1,limit:c=10}=s;return(await p.get("/exercises",{params:{page:r,limit:c,...s}})).data}static async addRateByExerciseId(s,r){return(await p.patch(`/exercises/${s}/rating`,r)).data}static async getExerciseById(s){return(await p.get(`/exercises/${s}`)).data}static async getFilters(s={}){const{page:r=1,limit:c=12}=s;return(await p.get("/filters",{params:{page:r,limit:c,...s}})).data}static async getQuote(){return(await p.get("/quote")).data}static async addSubscription(s){return(await p.post("/subscription",s)).data}}const D=(i,s)=>{const r=i.map(c=>`<li class="item"><a href="#">${c}</a></li>`).join("");s.insertAdjacentHTML("beforeend",r)},N=(i,s)=>{const r=i.map(({filter:c,name:a,imgURL:d})=>`
      <li class="card-item">
        <a class="card-link" href="#">
          <img
            src="${d}"
            alt="${a}"
          />
          <div class="card-content" data-category="${a}">
            <div class="card-name">${a}</div>
            <div class="card-filter">${c}</div>
          </div>
        </a>
      </li>
      `).join("");s.insertAdjacentHTML("beforeend",r)},C=(i,s)=>{const r=i.map(({bodyPart:c,burnedCalories:a,gifUrl:d,name:y,rating:v,target:n,time:u,_id:g})=>`
      <li class="card-item">
        <div class="card-header">
          <div class="badge-wrapper">
            <div class="__badge">WORKOUT</div>
            <div class="__rating">${v}</div>
          </div>
          <div>
            <a class="__start" href="#" data-id="${g}">Start</a>
          </div>
        </div>
        <div class="card-content">
          <img
            src="${d}"
            alt="${n}"
            width="24"
            height="24"
          />
          <span class="card-content-name" title="${y}">${y}</span>
        </div>
        <div class="card-footer">
          <ul class="card-footer-list">
            <li class="item">
              <span class="item-name">Burned calories:</span><span class="item-value" title="${a} / ${u} min">${a} / ${u} min</span>
            </li>
            <li class="item">
              <span class="item-name">Body part:</span><span class="item-value" title="${c}">${c}</span>
            </li>
            <li class="item">
              <span class="item-name">Target:</span><span class="item-value" title="${n}">${n}</span>
            </li>
          </ul>
        </div>
      </li>
      `).join("");s.insertAdjacentHTML("beforeend",r)};(()=>{const i="hidden",s={muscles:"Muscles",bodyParts:"Body parts",equipment:"Equipment"},r=s.muscles,c={[s.muscles]:"muscles",[s.bodyParts]:"bodypart",[s.equipment]:"equipment"},a={filter:null,exercise:null},d=document.getElementById("breadcrumbs-nav"),y=d.querySelector(".item-home"),v=document.getElementById("breadcrumbs-filters"),n=document.querySelector(".exercises"),u=n.querySelector(".cards"),g=n.querySelector(".cards-exercises"),m=document.getElementById("search-field"),$=m.querySelector(".search-form"),b=m.querySelector(".search-input"),I=m.querySelector(".seach-submit"),T=m.querySelector(".seach-reset"),h=(e=!1)=>{if(e){const t=n.querySelector(".loader");t&&t.remove()}else n.insertAdjacentHTML("beforeend",'<div class="loader"></div>')},x=(e=!1)=>{e?T.classList.add(i):T.classList.remove(i)},S=(e=!1,t=!1)=>{e?m.classList.add(i):m.classList.remove(i),t&&(b.value="")},q=()=>{u.innerHTML="",g.innerHTML=""},j=()=>{const e=d.querySelector(".item-exercise");e.removeAttribute("title"),e.classList.remove("active"),e.innerText=""},w=e=>{const t=d.querySelector(".item-exercise");t.setAttribute("title",e),t.classList.add("active"),t.innerText=e},L=async(e,t,l="")=>{try{q(),h(),w(t);const o={[c[e]]:t,keyword:l},f=await B.getExercises(o),{results:k}=f;a.exercise=t,C(k,g)}catch(o){console.error(o)}finally{h(!0),S()}},E=async e=>{try{q(),j(),h(),S(!0,!0);const t=await B.getFilters({filter:e}),{results:l}=t;a.filter=e,N(l,u);const o=v.querySelectorAll(".item");for(let f of o)f.innerText===e?f.classList.add("active"):f.classList.remove("active")}catch(t){console.error(t)}finally{h(!0)}},A=e=>{if(e.preventDefault(),e.target.nodeName!=="A")return;const t=e.target.innerText.trim();E(t)};v.addEventListener("click",A);const H=e=>{e.preventDefault();const{filter:t}=a;if(e.target.nodeName!=="DIV")return;const l=e.target.dataset.category.trim();l&&L(t,l)};u.addEventListener("click",H);const F=e=>{e.preventDefault();const{filter:t,exercise:l}=a,o=b.value.trim();o&&L(t,l,o)},R=()=>{x(!0);const{filter:e,exercise:t}=a;L(e,t)};I.addEventListener("click",F),$.addEventListener("submit",F),$.addEventListener("reset",R);const _=e=>{e.target.value.trim()?x():x(!0)};b.addEventListener("input",_),y.addEventListener("click",()=>{E(r)}),D(Object.values(s),v),E(r)})();
//# sourceMappingURL=index.js.map
