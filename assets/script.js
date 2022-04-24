/* 
Intersection observer from Web Dev Simplified: https://www.youtube.com/watch?v=2IbRtjez6ag
*/

const reveals = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("active", entry.isIntersecting)
  })
})


reveals.forEach(reveal => {
  observer.observe(reveal)
})