
const profile = document.querySelector('.profile')
const Share_icon = document.querySelectorAll('  .Share_icon')
const socialicons = document.querySelector('.social-icons')
  Share_icon.forEach((element)=>{
    element.addEventListener('click',function (e) {
    socialicons.classList.toggle('show')
    socialicons.classList.toggle('hide')
    
  })
  })
