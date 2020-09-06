// VARIABLES

const aside = document.getElementById('asideExample');
const header = document.getElementById('headerExample');
const button = document.getElementById('asideButton');
let switched = false;

// FUNCTIONS

function hasParentWithMatchingSelector(target, selector) {
  const element = document.querySelector(selector)
  if (target === element)
    return true
  else
    if (target.parentNode)
      return hasParentWithMatchingSelector(target.parentNode, selector)
    else
      return false
}

function changeNavbarStatus() {
  if (switched) { 
    aside.style.transform = 'translateX(0px)';
    header.style.transform = 'translateX(' + aside.offsetWidth + 'px)';
  } else {
    aside.style.transform = 'translateX(-' + aside.offsetWidth + 'px)';
    header.style.transform = 'translateX(0px)';
  }
  return null;
}

// LISTENERS

button.addEventListener('click', function () {
  if (window.matchMedia('(min-width: 768px)').matches) return;
  switched = !switched;
  changeNavbarStatus();
});

header.addEventListener('click', function (event) {
  if (hasParentWithMatchingSelector(event.target, '#asideButton')) return;
  if (window.matchMedia('(min-width: 768px)').matches) return;
  switched = false;
  changeNavbarStatus();
});

window.addEventListener('load', function () {
  if (window.matchMedia('(min-width: 768px)').matches) return;
  aside.style.transform = 'translateX(-' + aside.offsetWidth + 'px)';
  header.style.transform = 'translateX(0px)';
});

window.addEventListener('resize', function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    aside.style.transform = 'translateX(0px)';
    header.style.transform = 'translateX(0px)';
  } else {
    aside.style.transform = 'translateX(-' + aside.offsetWidth + 'px)';
    header.style.transform = 'translateX(0px)';
  }
});