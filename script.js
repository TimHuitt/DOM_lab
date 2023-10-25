// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'}, // href: '/about'
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let showingSubMenu;

const mainEl = document.querySelector("main");
const topMenuEl = document.querySelector("#top-menu")
const mainUL = document.querySelector('ul')
const input = document.querySelector('input')
const btn = document.querySelectorAll('button');
let subMenuEl = document.querySelector('#sub-menu')
let topMenuLinks;

topMenuEl.addEventListener('click', (event) => {
  event.stopPropagation()
  const el = event.target

  if (el.tagName !== 'A') return

  if (el.classList.contains('active')) {
    console.log('test')
    el.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = 0
    return
  }

  topMenuLinks = document.querySelectorAll('#top-menu a')
  topMenuLinks.forEach((link) => {
    link.classList.remove('active')
  })
  

  el.classList.add('active')

  showingSubMenu = true

  const subLinks = {}
  menuLinks.forEach((link) => {
    if (link.text === el.innerText.toLowerCase()) {
      if (link.subLinks) {
        subLinks[link.text] = link.subLinks
        showingSubMenu = true
      }
    }
  })

  if (showingSubMenu) {
    buildSubMenu(subLinks)
    subMenuEl.style.top = '100%'
  }

  function buildSubMenu(subLinks) {
    subMenuEl.innerText = ''
    
    for (const item in subLinks) {
      subLinks[item].forEach((link) => {
        const newEl = document.createElement("a")
        newEl.href = link.href
        newEl.textContent = link.text
        subMenuEl.appendChild(newEl)
      })
    }
  }
})

subMenuEl.addEventListener('click', (event) => {
  event.preventDefault()
  const el = event.target
  if (el.tagName !== 'A') return

  showingSubMenu = false
  subMenuEl.style.top = '0'
  topMenuLinks = document.querySelectorAll('#top-menu a')

  topMenuLinks.forEach((link) => {
    link.classList.remove('active')
  })

  mainEl.innerText = el.innerText
})

showingSubMenu = false

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add('flex-around')

subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'



menuLinks.forEach((link) => {
  const newEl = document.createElement("a")
  newEl.href = link.href
  newEl.textContent = link.text
  topMenuEl.appendChild(newEl)
})

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = `
<h3>Comments</h3>
<ul>
  <li>SEI Rocks!</li>
</ul>
<input>
<button>Add Comment</button>
<br><br>
<button>Cyan</button>
<button>Magenta</button>
<button>Yellow</button>
<button>Black</button>
`

btn.forEach((el) => {
  el.addEventListener('click', handleClicks)
})

function addComment(e) {
  newComment = document.createElement("li")
  newComment.innerText = input.value
  mainUL.appendChild(newComment)
  input.value = ''
}

function handleClicks(e) {
  
  switch (e.target.textContent) {
    case "Cyan":
      mainEl.style.backgroundColor = "Cyan"
      break;
    case "Magenta":
      mainEl.style.backgroundColor = "Magenta"
      break;
    case "Yellow":
      mainEl.style.backgroundColor = "Yellow"
      break;
    case "Black":
      mainEl.style.backgroundColor = "Black"
      break;
    default:
      addComment(e)
  }
}

