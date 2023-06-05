const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle");
const sideBarEl = document.querySelector(".sidebar");


toggleBtn.addEventListener("click", ()=>{
    sideBarEl.classList.toggle("show-bar");
})
closeBtn.addEventListener("click", ()=>{
    sideBarEl.classList.remove("show-bar");
})