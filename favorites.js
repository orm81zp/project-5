import{L as n,U as y,g as p,c as v,s as m,A as E,b as x}from"./assets/main-KevMY7Db.js";import"./assets/vendor-DvC1QdLM.js";(()=>{const o=document.querySelector(".favorites");if(!o)return;const c={exercisesIds:[]};c.exercisesIds=JSON.parse(localStorage.getItem(n))||[];const t=o.querySelector(".cards-exercises"),l=o.querySelector(".favorites-wrapper"),i=o.querySelector(".notification-message"),f=e=>{const s=t.querySelector(`.card-item[data-id="${e}"]`);s&&t.removeChild(s)},u=e=>!t.querySelector(`.card-item[data-id="${e}"]`),g=e=>{try{const r=(JSON.parse(localStorage.getItem(n))||[]).filter(a=>a!==e);c.exercisesIds=r,localStorage.setItem(n,JSON.stringify(r)),f(e),r.length===0&&i.classList.add("vissible")}catch(s){console.log(s)}},S=e=>{e.preventDefault();const s=e.target.className;if(s&&s.includes("trash-link")){const a=p(e.target,".card-item");a&&a.dataset&&g(a.dataset.id)}},d=async e=>{if(!e||e.length===0){i.classList.add("vissible");return}i.classList.remove("vissible");try{v(t),m(l);const[...s]=await Promise.all(e.filter(u).map(r=>E.getExerciseById(r)));x(s,t,!0)}catch(s){console.log(s)}finally{m(l,!0)}};t.addEventListener("click",S),document.addEventListener(y,e=>{d(e.detail)}),d(c.exercisesIds)})();
//# sourceMappingURL=favorites.js.map
