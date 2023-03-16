const startBtn = document.querySelector('.start')
const pouse = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const text = document.querySelector('.text')


let counter = 0

startBtn.addEventListener('click', ()=>{
    timer = setInterval( setTime, 1000)
})
stopBtn.addEventListener('click', clearTime)
function clearTime(){
    clearInterval(timer)
    counter = 0
    text.innerHTML = 0
}

function setTime(){
    counter++
    text.innerHTML = counter
}
pouse.addEventListener('click', ()=>{
    clearInterval(timer)
})