// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

const mainEl = document.querySelector("main");
const topMenuEl = document.querySelector("#top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add('flex-around')

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

const btn = document.querySelectorAll('button');

btn.forEach((el) => {
  el.addEventListener('click', handleClicks)
})

const mainUL = document.querySelector('ul')
const input = document.querySelector('input')

function addComment(e) {
  newComment = document.createElement("li")
  console.log(e)
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

