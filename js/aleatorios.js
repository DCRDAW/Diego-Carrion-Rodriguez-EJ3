'use strict'
let array=[]
let numnegativo=0;
let may15=0;
let mult15=0;
let par=0;
for(let i=0;i<10;i++){
    array[i]=(Math.random() < 0.5 ? -1 : 1)*(Math.floor((Math.random() * 150) + -150));
}
for(let i=0;i<10;i++){
    document.write(`${array[i]} <br />`)
}
for(let i=0;i<10;i++){
    if (array[i]<0){
        numnegativo++
    }
    if (array[i]>15){
        may15++
    }
    if (array[i]%15==0){
        mult15++
    }
    if (array[i]%2==0){
        par++
    }
}
document.write(`negativos= ${numnegativo}<br />`)
document.write(`mayores que 15= ${may15}<br />`)
document.write(`multiplos de 15= ${mult15}<br />`)
document.write(`pares= ${par}<br />`)