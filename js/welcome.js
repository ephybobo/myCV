const signs = document.querySelectorAll('welcome')

const randomIn = (min, max) => 
(
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => 
{
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => 
{
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => 
  {
    mixupInterval(el)
  })
})

Welcome();

function Welcome() {
  document.getElementById("welcome").innerHTML = "\"Selvy Andy Wijaya\"";
}
