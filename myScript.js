const container = document.querySelector(".container")
const thankscontainer = document.querySelector(".container2")
const submit = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn-num")

submit.addEventListener("click", () => {
    thankscontainer.classList.remove("hidden")
    container.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})