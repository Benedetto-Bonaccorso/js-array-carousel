
let root = document.querySelector(":root");
let images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp","./img/05.webp"];
let imgContainer = document.getElementById("imgContainer")
let counter = 0

for(let i = 0; i < images.length; i++){
    imgContainer.innerHTML += `<img src="${images[i]}" id="${i}" class="">`
    let hidingSlide = document.getElementById(`${i}`)
    hidingSlide.classList.add("invisible")
}

let firstImage = document.getElementById("0")
firstImage.classList.remove("invisible")

function counterUp(){
    counter++
    counterChecker()
    backgroundUpdater()
}

function counterDown(){
    counter--
    counterChecker()
    backgroundUpdater()
}

function counterChecker(){
    if(counter > images.length-1){
        counter = 0
    } else if(counter < 0){
        counter = images.length-1
    }
}

function backgroundUpdater(){

    for(let i = 0; i < images.length; i++){
        let hidingSlide = document.getElementById(`${i}`)
        if(!hidingSlide.classList.contains("invisible")){
        hidingSlide.classList.add("invisible")}
    }

    let currentImg = document.getElementById(`${counter}`)
    currentImg.classList.remove("invisible")

}

/*
function counterUp() {
    counterValue = 1
    backgroundUpdater()
}
function counterDown() {
    counterValue = -1
    backgroundUpdater()
}
*/

/*
function backgroundUpdater(){
    
    counter += counterValue
    console.log("counterUp",counter)
    
    if(counter == 1){
        background1()
    }else if(counter == 2){
        background2()
    }else if(counter == 3){
        background3()
    }else if(counter == 4){
        background4()
    }else if(counter == 5){
        background5()
    } else if(counter >= 6){
        background1()
        counter = 1
    } else if (counter <= 0){
        background5()
        counter = 5
    }
    console.log(counter)
    
}

/*

function background1(){
    root.style.setProperty("--current-background", "<imgurl(../img/01.webp)")
}

function background2(){
    root.style.setProperty("--current-background", "<imgurl(../img/02.webp)")
}

function background3(){
    root.style.setProperty("--current-background", "<imgurl(../img/03.webp)")
}

function background4(){
    root.style.setProperty("--current-background", "<imgurl(../img/04.webp)")
}

function background5(){
    root.style.setProperty("--current-background", "<imgurl(../img/05.webp)")
}

*/

/*
let images =["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp","./img/05.webp"];
let counter;

function counterUp(){
    counter ++
}
function counterDown(){
    counter --
}
*/