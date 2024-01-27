window.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('.screen')
  const btn = document.querySelector('.not')
  const bost = document.querySelector('.x2')
  const exp = document.querySelector('.exp')
  let a = 1
  bost.addEventListener('click', () => {
    a = a + 1
    bost.style = 'display:none'
  })
  let i = 0
  btn.addEventListener('click', () => {
    exp.textContent = i
    i = i + 1 + a
    if (i === 100) {
      alert("waw sen 100 ge jettin'")
    } else if (i === 1000) {
      alert("1000 g'a jetsen' kartan'a 0.01 UZS taslap beremen")
    } else if (i === 10000) {
      prompt('Kartan`di jaz:')
    } else if (i === 500) {
      bost.style = 'display:block;'
    } else if (i > 99999) {
      i = i * 0
    }
    text.textContent = i
  })
})
