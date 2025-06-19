const menuList = document.getElementById('menu')
const closeBtn = document.getElementById('close-btn')

closeBtn.style.visibility = 'hidden'

function openMenu() {
  menuList.classList.add('active')
  menuList.classList.remove('hidden')
  closeBtn.style.visibility = 'visible'
  
}

function closeMenu() {
  menuList.classList.remove('active')
  menuList.classList.add('hidden')
  closeBtn.style.visibility = 'hidden'
}