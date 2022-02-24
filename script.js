const body = document.querySelector("body")
const nav = document.querySelector("nav")
const modeToggle = document.querySelector(".dark-light")
const searchToggle = document.querySelector(".searchToggle")

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active")
    body.classList.toggle("dark")
})

searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active")
})