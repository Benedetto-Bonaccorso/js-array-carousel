let root = document.querySelector(':root');
let counter = 1

function counterUp() {
    counterValue = 1
    backgroundUpdater()
}
function counterDown() {
    counterValue = -1
    backgroundUpdater()
}

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

function background1(){
    root.style.setProperty("--current-background", "url(../img/01.webp)")
}

function background2(){
    root.style.setProperty("--current-background", "url(../img/02.webp)")
}

function background3(){
    root.style.setProperty("--current-background", "url(../img/03.webp)")
}

function background4(){
    root.style.setProperty("--current-background", "url(../img/04.webp)")
}

function background5(){
    root.style.setProperty("--current-background", "url(../img/05.webp)")
}
  