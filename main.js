
const navBtn = document.querySelector('.nav_toggle')
navBtn.addEventListener("click",navToggle)

function navToggle(){
  console.log('in here')
  navBtn.classList.toggle('active')
}