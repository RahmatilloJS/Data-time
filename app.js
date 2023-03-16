const startBtn = document.querySelector('.start')
const pouse = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const text = document.querySelector('.text')


let counter = 0
startBtn.addEventListener('click', ()=>{
    timer = setInterval(setTime, 1000)
    startBtn.setAttribute('disabled', 'true')
})

pouse.addEventListener('click', ()=>{
    startBtn.removeAttribute('disabled')
    clearInterval(timer)
})

stopBtn.addEventListener('click', ()=>{
    startBtn.removeAttribute('disabled')
    clearInterval(timer)
    counter = 0
    text.innerHTML = 0
})


function setTime(){
    counter++
    text.innerHTML = counter
}