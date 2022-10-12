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

    imgContainer.innerHTML = images[i]
}