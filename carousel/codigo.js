const carruseljs = document.querySelector(".carrusel")

let maxScrollleft = carruseljs.scrollWidth - carruseljs.clientWidth

let intervalo = null
let step = 1

const start = () => {
    intervalo = setInterval(function(){
        carruseljs.scrollLeft = carruseljs.scrollLeft + step
        if(carruseljs.scrollLeft === maxScrollleft) {
            step = step * -1
        } 
        else if(carruseljs.scrollLeft === 0) {
            step = step * -1
        }
    },10
    )
}

const stop = () => {
    clearInterval(intervalo)
}

carruseljs.addEventListener("mouseover", () => {
    stop()
})

carruseljs.addEventListener("mouseout", () => {
    start()
})

start()