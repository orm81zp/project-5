import{r as M,A as g,a as N,g as j,b as P}from"./assets/main-DxOG2TzW.js";import"./assets/vendor-DvC1QdLM.js";(()=>{const l="hidden",a={muscles:"Muscles",bodyParts:"Body parts",equipment:"Equipment"},E=a.muscles,T={[a.muscles]:"muscles",[a.bodyParts]:"bodypart",[a.equipment]:"equipment"},n={filter:null,exercise:null},u=document.getElementById("breadcrumbs-nav"),I=u.querySelector(".item-home"),m=document.getElementById("breadcrumbs-filters"),o=document.querySelector(".exercises"),f=o.querySelector(".cards"),h=o.querySelector(".cards-exercises"),c=document.getElementById("search-field"),p=c.querySelector(".search-form"),y=c.querySelector(".search-input"),k=c.querySelector(".seach-submit"),x=c.querySelector(".seach-reset"),d=(e=!1)=>{if(e){const t=o.querySelector(".loader");t&&t.remove()}else o.insertAdjacentHTML("beforeend",'<div class="loader"></div>')},L=(e=!1)=>{e?x.classList.add(l):x.classList.remove(l)},S=(e=!1,t=!1)=>{e?c.classList.add(l):c.classList.remove(l),t&&(y.value="")},F=()=>{f.innerHTML="",h.innerHTML=""},B=()=>{const e=u.querySelector(".item-exercise");e.removeAttribute("title"),e.classList.remove("active"),e.innerText=""},H=e=>{const t=u.querySelector(".item-exercise");t.setAttribute("title",e),t.classList.add("active"),t.innerText=e},v=async(e,t,s="")=>{try{F(),d(),H(t);const r={[T[e]]:t,keyword:s},i=await g.getExercises(r),{results:D}=i;n.exercise=t,P(D,h)}catch(r){console.error(r)}finally{d(!0),S()}},b=async e=>{try{F(),B(),d(),S(!0,!0);const t=await g.getFilters({filter:e}),{results:s}=t;n.filter=e,N(s,f);const r=m.querySelectorAll(".item");for(let i of r)i.innerText===e?i.classList.add("active"):i.classList.remove("active")}catch(t){console.error(t)}finally{d(!0)}},A=e=>{if(e.preventDefault(),!(e.target.className&&e.target.className.includes("filter-link")))return;const s=e.target.innerText.trim();b(s)};m.addEventListener("click",A);const R=e=>{e.preventDefault();const{filter:t}=n,s=j(e.target,".card-item");if(s&&s.dataset&&s.dataset.exercise){const r=s.dataset.exercise.trim();v(t,r)}};f.addEventListener("click",R);const q=e=>{e.preventDefault();const{filter:t,exercise:s}=n,r=y.value.trim();r&&v(t,s,r)},w=()=>{L(!0);const{filter:e,exercise:t}=n;v(e,t)};k.addEventListener("click",q),p.addEventListener("submit",q),p.addEventListener("reset",w);const C=e=>{e.target.value.trim()?L():L(!0)};y.addEventListener("input",C),I.addEventListener("click",()=>{b(E)}),M(Object.values(a),m),b(E)})();
//# sourceMappingURL=index.js.map
