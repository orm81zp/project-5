import{L as n,U as y,g as h,c as p,s as m,A as E,b as x}from"./assets/main-Bazo7FTm.js";import"./assets/vendor-DvC1QdLM.js";(()=>{const o=document.querySelector(".favorites");if(!o)return;const c={exercisesIds:[]};c.exercisesIds=JSON.parse(localStorage.getItem(n))||[];const r=o.querySelector(".cards-exercises"),l=o.querySelector(".favorites-wrapper"),i=o.querySelector(".notification-message"),f=e=>{const t=r.querySelector(`.card-item[data-id="${e}"]`);t&&r.removeChild(t)},u=e=>!r.querySelector(`.card-item[data-id="${e}"]`),g=e=>{try{const s=(JSON.parse(localStorage.getItem(n))||[]).filter(a=>a!==e);c.exercisesIds=s,localStorage.setItem(n,JSON.stringify(s)),f(e),s.length===0&&i.classList.remove("hidden")}catch(t){console.log(t)}},S=e=>{e.preventDefault();const t=e.target.className;if(t&&t.includes("trash-link")){const a=h(e.target,".card-item");a&&a.dataset&&g(a.dataset.id)}},d=async e=>{if(!e||e.length===0){i.classList.remove("hidden");return}i.classList.add("hidden");try{p(r),m(l);const[...t]=await Promise.all(e.filter(u).map(s=>E.getExerciseById(s)));x(t,r,!0)}catch(t){console.log(t)}finally{m(l,!0)}};r.addEventListener("click",S),document.addEventListener(y,e=>{d(e.detail)}),d(c.exercisesIds)})();
//# sourceMappingURL=favorites.js.map
