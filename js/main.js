(()=>{var s=`
<div class="loader loader--style3" title="loading">
  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
    <animateTransform attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="0.6s"
      repeatCount="indefinite"/>
    </path>
  </svg>
</div>`;var g="gamestate",h={player:{name:"Adventurer",health:{current:100,total:100}}},l={};function c(){window.localStorage.setItem(g,JSON.stringify(l))}function f(){return l=JSON.parse(window.localStorage.getItem(g))||h,c(),l}function n(){return l}function y(){l=h,c()}function x(){let e={};function t(d){let a=e.nameInput.value;d.preventDefault(),n().player.name=a,c(),e.name.textContent=a,e.nameForm.setAttribute("hidden","true")}function r(){e.nameForm.toggleAttribute("hidden"),e.nameForm.hasAttribute("hidden")||e.nameInput.focus()}function i(){e.name=document.getElementById("player-name"),e.nameEdit=document.getElementById("player-name-edit"),e.nameInput=document.getElementById("player-name-input"),e.nameForm=document.getElementById("player-name-form")}function m(){e.nameForm.addEventListener("submit",t),e.nameEdit.addEventListener("click",r)}i(),m(),n().player.name&&(e.name.textContent=n().player.name,e.nameInput.value=n().player.name)}var u={};function b(){u.dialog=document.querySelector("dialog")}b();function S(){u.dialog.showModal()}function v(e){u.dialog.innerHTML=`Searching for monsters...${s}`,setTimeout(()=>{u.dialog.innerHTML=e},1500)}function E(e){let t="";return t+=`<h3>Look! A ${e.name}</h3>`,t+="<p>Do you want to fight it?</p>",t}function w(){let e={};function t(){v(E({name:"Goblin"})),S()}function r(){e.fightSearch=document.getElementById("fight-search")}function i(){e.fightSearch.addEventListener("click",t)}r(),i()}var o={};function A(){o.progressBar=document.querySelector(".health .progress-bar"),o.healthCurrent=document.getElementById("player-health-current"),o.healthTotal=document.getElementById("player-health-total")}A();function F(){let e="danger";o.healthCurrent.textContent=n().player.health.current,o.healthTotal.textContent=n().player.health.total,o.progressBar.style.width=`${n().player.health.current}%`,n().player.health.current>=25&&(e="warning"),n().player.health.current>=75&&(e="good"),o.progressBar.style.backgroundColor=`var(--progress-${e})`}function _(){F()}function $(){let e={state:f()},t={};function r(){x(),_(),w()}function i(a){a.preventDefault(),y(),window.location.reload(!0)}function m(){t.game=document.getElementById("game"),t.loadingGame=document.getElementById("loading-game"),t.resetGame=document.querySelectorAll(".reset-game")}function d(){t.resetGame.forEach(a=>{a.addEventListener("click",i)})}m(),t.loadingGame.innerHTML=s,d(),r(),setTimeout(()=>{t.loadingGame.setAttribute("hidden",!0),t.game.removeAttribute("hidden")},1500)}$();})();