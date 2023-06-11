let down = document.querySelectorAll('.fa-chevron-down')
let closet = document.querySelectorAll('.for_btn')


down.forEach((e) => {
    e.addEventListener("click", () => {
        e.parentElement.classList.toggle('none')
        e.parentElement.nextElementSibling.classList.toggle('none')
    })
})

closet.forEach((c)=>{
    c.addEventListener("click", () => {
        c.parentElement.classList.toggle('none')
        c.parentElement.previousElementSibling.classList.toggle('none')
    })
})