
let root = document.querySelector(':root');
let counter = 1
let images = [`<img src="./img/01.webp">`, `<img src="./img/02.webp">`, `<img src="./img/03.webp">`, `<img src="./img/04.webp">`,`<img src="./img/05.webp">`];
let imgContainer = document.getElementById("imgContainer")
let counterValue = 1

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

function counterUp() {
    counterValue += 1
    backgroundHandler()
}

function counterDown() {
    counterValue -= 1
    backgroundHandler()
}

function backgroundHandler(){

    if(counterValue <1){
        counterValue = 5
    } else if(counterValue >5){
        counterValue = 1
    }

    for(let i = 0; i<counterValue; i++){
        imgContainer.innerHTML = images[i]
    }   
}

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
let images =[`<img src="./img/01.webp">`, `<img src="./img/02.webp">`, `<img src="./img/03.webp">`, `<img src="./img/04.webp">`,`<img src="./img/05.webp">`];
let counter;

function counterUp(){
    counter ++
}
function counterDown(){
    counter --
}
*/