const navbar = document.getElementsByTagName('nav'),
  button = document.getElementsByClassName('sidebar-button')[0]

console.log(button)

window.addEventListener('load', function () {
  navbar[0].style.left = -navbar[0].clientWidth + 'px'
})

button.addEventListener('click', function () {
  navbar[0].style.left = '0px'
})