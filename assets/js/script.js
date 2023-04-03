

function upDateClock(){
    
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    
    document.querySelector('.hr-digital').innerHTML = `${add0(horas)}`
    document.querySelector('.mn-digital').innerHTML =`${add0(minutos)}`
    document.querySelector('.seg-digital').innerHTML = `${add0(segundos)}`
    
    let degHr = (horas * 30 ) + ((minutos * 6) /12) +90

    let pointerHr = document.querySelector('.hr');
    let pointerMn = document.querySelector('.mn');
    let pointerSeg = document.querySelector('.seg');
   
    pointerHr.style.transform = `rotateZ(${degHr}deg)`
    pointerMn.style.transform = `rotate(${(minutos*6)+90}deg)`
    pointerSeg.style.transform = `rotate(${(segundos*6)+90}deg)`
}
function add0 (time){
    return time < 10 ? '0' + time : time
}

upDateClock();
setInterval(upDateClock,1000)


