const navbar = document.getElementsByTagName('nav'),
  button = document.getElementsByClassName('sidebar-button')[0]

function checkParent (parent, child) { 
  let node = child.parentNode
  while (node != null) { 
    if (node == parent) { 
      return true
    } 
    node = node.parentNode
  } 
  return false
} 

window.addEventListener('load', function () {
  navbar[0].style.left = -navbar[0].clientWidth + 'px'
})

button.addEventListener('click', function () {
  navbar[0].style.left = '0px'
})

window.addEventListener('click', function (event) {
  if (event.target !== button) {
    if (event.target !== navbar && !checkParent(button, event.target)) {
      navbar[0].style.left = -navbar[0].clientWidth + 'px'
    }
  } else {
    navbar[0].style.left = '0px'
  }
})